const WIKIPEDIA_CACHE_KEY = 'jarvis_wikipedia_cache';
const WIKIPEDIA_FAVORITES_KEY = 'jarvis_wikipedia_favorites';

export function getCache() {
  try {
    const cache = localStorage.getItem(WIKIPEDIA_CACHE_KEY);
    return cache ? JSON.parse(cache) : {};
  } catch {
    return {};
  }
}

export function saveToCache(articles) {
  try {
    const cache = getCache();
    articles.forEach(article => {
      cache[article.title.toLowerCase()] = {
        title: article.title,
        extract: article.extract,
        url: article.content_urls?.desktop?.page || '',
        timestamp: Date.now()
      };
    });
    localStorage.setItem(WIKIPEDIA_CACHE_KEY, JSON.stringify(cache));
    return true;
  } catch (e) {
    console.error('Cache save failed:', e);
    return false;
  }
}

export async function fetchWikipediaArticle(title) {
  try {
    const cache = getCache();
    const key = title.toLowerCase();
    
    if (cache[key]) {
      return cache[key];
    }
    
    const response = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
    );
    
    if (response.ok) {
      const data = await response.json();
      const article = {
        title: data.title,
        extract: data.extract,
        description: data.description,
        url: data.content_urls?.desktop?.page || '',
        image: data.thumbnail?.source || null
      };
      
      saveToCache([article]);
      return article;
    }
    
    return null;
  } catch (e) {
    console.error('Wikipedia fetch failed:', e);
    return null;
  }
}

export async function searchWikipedia(query) {
  try {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(query)}&limit=10&namespace=0&format=json`
    );
    
    if (response.ok) {
      const data = await response.json();
      return data[1].map((title, i) => ({
        title,
        description: data[2][i] || '',
        url: data[3][i] || ''
      }));
    }
    
    return [];
  } catch (e) {
    console.error('Wikipedia search failed:', e);
    return [];
  }
}

export async function getRandomWikipediaArticle() {
  try {
    const response = await fetch(
      'https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=1&format=json'
    );
    
    if (response.ok) {
      const data = await response.json();
      const id = data.query.random[0].id;
      const title = data.query.random[0].title;
      
      const articleResponse = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
      );
      
      if (articleResponse.ok) {
        const article = await articleResponse.json();
        return {
          title: article.title,
          extract: article.extract,
          description: article.description,
          url: article.content_urls?.desktop?.page || ''
        };
      }
    }
    
    return null;
  } catch (e) {
    console.error('Random article fetch failed:', e);
    return null;
  }
}

export function getFavorites() {
  try {
    const favorites = localStorage.getItem(WIKIPEDIA_FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch {
    return [];
  }
}

export function addToFavorites(article) {
  try {
    const favorites = getFavorites();
    const exists = favorites.some(f => f.title === article.title);
    
    if (!exists) {
      favorites.push({
        title: article.title,
        extract: article.extract,
        url: article.url,
        savedAt: Date.now()
      });
      localStorage.setItem(WIKIPEDIA_FAVORITES_KEY, JSON.stringify(favorites));
    }
    
    return true;
  } catch {
    return false;
  }
}

export function removeFromFavorites(title) {
  try {
    const favorites = getFavorites();
    const filtered = favorites.filter(f => f.title !== title);
    localStorage.setItem(WIKIPEDIA_FAVORITES_KEY, JSON.stringify(filtered));
    return true;
  } catch {
    return false;
  }
}

export function clearCache() {
  localStorage.removeItem(WIKIPEDIA_CACHE_KEY);
  return true;
}

export function getCacheSize() {
  const cache = getCache();
  return Object.keys(cache).length;
}

export function searchCache(query) {
  const cache = getCache();
  const lowerQuery = query.toLowerCase();
  
  return Object.values(cache)
    .filter(article => 
      article.title.toLowerCase().includes(lowerQuery) ||
      article.extract.toLowerCase().includes(lowerQuery)
    )
    .slice(0, 10);
}