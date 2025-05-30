## Opsæt en navbar (test opgave)

Du skal i denne opgave opsætte en navigations bar
Følgende links skal indgå i navigations baren:

```js
/home
/about
/contact
/services
/blog
```

Det er desuden vigtigt at du navngiver dine links det samme men med stort forbogstav.
Derudover skal du tilføje en "active class" fra react-router med proppen; `isActive`
Dine aktive links skal have følgende tailwind classnames:

```css
'text-white'
```

Dine links der ikke er aktive skal have:

```css
'text-gray-400 hover:text-white'
```

Til slut skal du rendere din navbar i App.tsx inde i en BrowserRouter med tilsvarende routes.
Du kan i denne opgave blot rendere en div med sidens titel i.
# gh-classroom-test
