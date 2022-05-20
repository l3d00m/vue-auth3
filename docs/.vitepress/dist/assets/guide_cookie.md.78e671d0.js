import{_ as e,c as a,o as t,a as s}from"./app.51b3911c.js";const m='{"title":"Values","description":"","frontmatter":{},"headers":[{"level":2,"title":"Values","slug":"values"},{"level":2,"title":"Expires Key","slug":"expires-key"},{"level":3,"title":"Example","slug":"example"}],"relativePath":"guide/cookie.md","lastUpdated":null}',o={},n=s(`<p>The <code>cookie</code> option specifies parameters to store with the cookie. It contains a key / value pairing with the key being the parameter name and the value being set accordingly based on a few simple rules described below.</p><blockquote><p>This only applies when using the <code>cookie</code> storage option.</p></blockquote><p>With this setup there are some default minimum values for the cookies. But any others can be added or removed by extending or overriding this parameter.</p><h2 id="values" tabindex="-1">Values <a class="header-anchor" href="#values" aria-hidden="true">#</a></h2><p>By default values \u200B\u200Bstored in <code>stores</code> including <code>cookie</code> will be coerced to <code>string</code> by \`JSON.stringify</p><h2 id="expires-key" tabindex="-1">Expires Key <a class="header-anchor" href="#expires-key" aria-hidden="true">#</a></h2><p>There is one special built in case with the <code>cookiee.xpires</code> value. The correct value for this is a date string. However, there is a built in check for a non string integer offset value that will automatically convert to a date. This is to simplify things with a simple offset.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><p>We can take a look at some of the current default values:</p><div class="language-ts"><pre><code>    cookie<span class="token operator">:</span> <span class="token punctuation">{</span>
        path<span class="token operator">:</span>     <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        domain<span class="token operator">:</span>   <span class="token keyword">null</span><span class="token punctuation">,</span>
        secure<span class="token operator">:</span>   <span class="token boolean">true</span><span class="token punctuation">,</span>
        expires<span class="token operator">:</span>  <span class="token number">12096e5</span><span class="token punctuation">,</span>
        sameSite<span class="token operator">:</span> <span class="token string">&#39;None&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
</code></pre></div><p>If the set cookie function is run with a key/value of &quot;myval&quot; and &quot;blah&quot; the resulting cookie would look something like the following.</p><div class="language-js"><pre><code>document<span class="token punctuation">.</span>cookie <span class="token operator">=</span>
  <span class="token string">&quot;myval=blah; path=/; domain=vue-auth3.js.org; Secure; Expires=\${Date.now() + 12096e5}; SameSite=None;&quot;</span>
</code></pre></div><p>In the above example, the domain was dynamically returned from the <code>getCookieDomain</code> function and the <code>expires</code> was automatically converted to a date string for us.</p><p>Any other parameters added there would follow the same pattern.</p>`,14),i=[n];function p(r,c,l,d,u,h){return t(),a("div",null,i)}var f=e(o,[["render",p]]);export{m as __pageData,f as default};
