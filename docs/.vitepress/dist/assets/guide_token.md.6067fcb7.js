import{_ as e,c as t,o,a as s}from"./app.51b3911c.js";const m='{"title":"Token Keys","description":"","frontmatter":{},"headers":[{"level":2,"title":"Token Keys","slug":"token-keys"},{"level":2,"title":"Stores","slug":"stores"},{"level":2,"title":"Long Lived Vs. Short Lived","slug":"long-lived-vs-short-lived"},{"level":2,"title":"remember() Method","slug":"remember-method"}],"relativePath":"guide/token.md","lastUpdated":null}',a={},n=s(`<p>The main concept to understand with tokens is in how they are stored.</p><p>In this guide we will review the set of token store options and how to use them.</p><div class="language-ts"><pre><code><span class="token keyword">const</span> auth <span class="token operator">=</span> <span class="token function">createAuth</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token operator">...</span>
        rememberkey<span class="token operator">:</span>         <span class="token string">&#39;auth_remember&#39;</span><span class="token punctuation">,</span>
        tokenDefaultKey<span class="token operator">:</span>     <span class="token string">&#39;auth_token_default&#39;</span><span class="token punctuation">,</span>
        tokenImpersonateKey<span class="token operator">:</span> <span class="token string">&#39;auth_token_impersonate&#39;</span><span class="token punctuation">,</span>
        stores<span class="token operator">:</span>              <span class="token punctuation">[</span><span class="token string">&#39;storage&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cookie&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h2 id="token-keys" tabindex="-1">Token Keys <a class="header-anchor" href="#token-keys" aria-hidden="true">#</a></h2><p>You will see a few token (and remember) keys defined in the options. These are the default keys the data will be stored under in the browsers storage or cookies. The key names being used there are quite arbitrary but can be changed in case of some conflict with other keys. The <code>auth_</code> prefix helps to avoid these conflicts by acting as a namespace for the vue-auth plugin.</p><h2 id="stores" tabindex="-1">Stores <a class="header-anchor" href="#stores" aria-hidden="true">#</a></h2><p>The <code>stores</code> option defines the store methods to use in order based on availability. So for instance in the above example it will attempt to use the browsers &quot;local storage&quot; before defaulting down to the next available &quot;cookie&quot; method.</p><h2 id="long-lived-vs-short-lived" tabindex="-1">Long Lived Vs. Short Lived <a class="header-anchor" href="#long-lived-vs-short-lived" aria-hidden="true">#</a></h2><p>This applies to how long the data is stored, which for the most part is set using the <code>staySignedIn</code> option with the <code>login</code>, <code>register</code> and <code>oauth2</code> methods.</p><p>If the <code>staySignedIn</code> is set to <code>false</code> it will be &quot;short lived&quot; data and expire after the browser is closed. If set to <code>true</code> it will be &quot;long lived&quot; and remain available for when the user returns.</p><p>This is automatically handled by the plugin. In the case of short lived <code>storage</code> option it will use <code>sessionStorage</code> rather than <code>localStorage</code> to save the token or remember data. Likewise for the short lived <code>cookie</code> option it will set a cookie with no expiration date rather than one with a two week expiration.</p><h2 id="remember-method" tabindex="-1">remember() Method <a class="header-anchor" href="#remember-method" aria-hidden="true">#</a></h2><p>The remember data piggy backs off the same concepts and functionality as above. However it stores some remember data for when a user logs in/out and returns the site. For instance storing a user name for a welcome back message. Check the methods guide for more info on <a href="/methods/utils.html#remember">remember() Method</a> usage.</p>`,13),r=[n];function i(d,c,l,p,h,u){return o(),t("div",null,r)}var g=e(a,[["render",i]]);export{m as __pageData,g as default};
