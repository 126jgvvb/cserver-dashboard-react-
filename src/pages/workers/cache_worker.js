/* eslint-disable no-restricted-globals */

const CACHE_NAME='space_cache';

const urls=['/load-page-data'];

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install',e=>{
e.waitUntil(caches.open(CACHE_NAME)
                  .then(
                    cache=>{
                        console.log('cache opened...');
                        cache.addAll(urls);
                  })                   
);
});



self.addEventListener('fetch',e=>{
    e.respondWith(
        caches.match(e.request)
            .then(resp=>{
                    if(resp){ return resp}
                    return fetch(e.request);
            })
    )
});



self.addEventListener('activate',e=>{
    const white_list=[CACHE_NAME];

    e.waitUntil(
        caches.keys().then(cache_name=>{
            return Promise.all(
                cache_name.map(each_name=>{
                    if(white_list.indexOf(each_name)===-1){
                        return caches.delete(each_name);
                    }
                    return true;
                })
            )
        })
    )
})