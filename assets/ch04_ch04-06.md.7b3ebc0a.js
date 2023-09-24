import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.4976f53a.js";const t="/djangonote/assets/ch04-06-01_01.34b273ea.png",l="/djangonote/assets/ch04-06-02_01.cd4a9de6.png",p="/djangonote/assets/ch04-06-02_02.24ea011a.png",o="/djangonote/assets/ch04-06-02_03.87a44c12.png",i="/djangonote/assets/ch04-06-02_04.081dfdc9.png",w=JSON.parse('{"title":"4-6. sqllitebrowser 설치","description":"","frontmatter":{},"headers":[],"relativePath":"ch04/ch04-06.md","filePath":"ch04/ch04-06.md"}'),c={name:"ch04/ch04-06.md"},r=n('<link rel="stylesheet" href="../css/style.css"><h1 id="_4-6-sqllitebrowser-설치" tabindex="-1">4-6. sqllitebrowser 설치 <a class="header-anchor" href="#_4-6-sqllitebrowser-설치" aria-label="Permalink to &quot;4-6. sqllitebrowser 설치&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">SQLLite3</p><p>파이썬에 포함된 SQLList는 단일 어플리케이션으로 접속하여 관리하기에 최적화된 구조를 가지고 있어 DB관련해서 빠르고 간편하게 개발할 수 있다.</p></div><h2 id="_4-6-1-sqllite3-데이터베이스-gui-도구-설치" tabindex="-1">4-6-1. SQLLite3 데이터베이스 GUI 도구 설치 <a class="header-anchor" href="#_4-6-1-sqllite3-데이터베이스-gui-도구-설치" aria-label="Permalink to &quot;4-6-1. SQLLite3 데이터베이스 GUI 도구 설치&quot;">​</a></h2><p><a href="https://www.sqlite.org/index.html" target="_blank" rel="noreferrer">SQLLite</a>는 기본적으로 파이썬을 설치하면 자동으로 설치가 됩니다. 별도로 설정을 하지 않으면, 기본적으로 SQLLite DB 를 사용한다.</p><p>여기서는 SQLLite를 GUI형태로 볼수 있는 데이터베이스 도구<a href="https://sqlitebrowser.org/" target="_blank" rel="noreferrer">DB Browser for SQLite</a>를 설치 및 설정하고, 4장에서 사용된 데이터베이스를 DB 브라우저에서 접속해서 확인해 본다.</p><p><a href="https://sqlitebrowser.org/" target="_blank" rel="noreferrer">sqlitebrowser공식사이트</a> 접속해서 해당파일을 다운로드해서 설치한다.</p><p><img src="'+t+'" alt="ch04-06-01_01.png"> 그림4-6-1. sqlitebrowser 다운로드</p><p>(설치화면은 생략한다.)</p><h2 id="_4-6-2-sqllite3-사용법" tabindex="-1">4-6-2. SQLLite3 사용법 <a class="header-anchor" href="#_4-6-2-sqllite3-사용법" aria-label="Permalink to &quot;4-6-2. SQLLite3 사용법&quot;">​</a></h2><p>SQLitebrowser를 실행해서 설문조사 어플리케이션에서 사용한 DB 파일을 열어 준다.</p><ol><li><p>File &gt; OpenDatabase 선택한다. <img src="'+l+'" alt="ch04-06-02_01.png"> 그림4-6-2. sqlitebrowser 실행화면</p></li><li><p>프로젝트 DB 선택화면 <img src="'+p+'" alt="ch04-06-02_02.png"> 그림4-6-2. polls-project DB 선택화면</p></li><li><p>데이터베이스 내역 데이터베이스 관련해서 다양한 기능이 존재 한다. 어떠한 기능이 있는지 한번씩 사용해 보도록 한다.<br> 예) 데이터베이스 구조(오브젝트) <img src="'+o+'" alt="ch04-06-02_03.png"> 그림4-6-2. polls-project DB 내역</p></li><li><p>SQL 실행 Tab</p></li></ol><div class="info custom-block"><p class="custom-block-title">INFO</p><p>프로그램개발시 데이터베이스 접속 도구를 이용해서 많은 작업을 수행하거나, SQL문을 이용해서 확인하는 절차가 많다 따라서, 도구를 사용하는 방법에 익숙해야 한다.</p></div><p><img src="'+i+`" alt="ch04-06-02_04.png"> 그림4-6-2. SQL문 실행 창</p><h2 id="_4-6-3-python-db-간단-예제" tabindex="-1">4-6-3 Python DB 간단 예제 <a class="header-anchor" href="#_4-6-3-python-db-간단-예제" aria-label="Permalink to &quot;4-6-3 Python DB 간단 예제&quot;">​</a></h2><p>간단한 DB 관련 Python 예제 입니다.<br> 아래의 내용을 수행 후 DB 변경사항을 확인한다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import sqlite3</span></span>
<span class="line"><span style="color:#e1e4e8;">import datetime</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">now = datetime.datetime.now()</span></span>
<span class="line"><span style="color:#e1e4e8;">nowDatetime = now.strftime(&#39;%Y-%m-%d %H:%M:%S&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># DB 생성 &amp; Auto Commit</span></span>
<span class="line"><span style="color:#e1e4e8;">make_DB = sqlite3.connect(&#39;C:/hyungsik74/pycharm/db.sqlite3&#39;, isolation_level=None)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># Cursor</span></span>
<span class="line"><span style="color:#e1e4e8;">data = make_DB.cursor()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 테이블 생성</span></span>
<span class="line"><span style="color:#e1e4e8;">data.execute(&quot;CREATE TABLE IF NOT EXISTS test(id INTEGER PRIMARY KEY, username text, email text, phone text, website text, regdate text)&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 테이블에 데이터 삽입</span></span>
<span class="line"><span style="color:#e1e4e8;">data.execute(&quot;INSERT INTO test VALUES(1,&#39;kim&#39;,&#39;kim@.com&#39;,&#39;010-000-0000&#39;,&#39;wwww.com&#39;,?)&quot;,(nowDatetime,))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import sqlite3</span></span>
<span class="line"><span style="color:#24292e;">import datetime</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">now = datetime.datetime.now()</span></span>
<span class="line"><span style="color:#24292e;">nowDatetime = now.strftime(&#39;%Y-%m-%d %H:%M:%S&#39;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># DB 생성 &amp; Auto Commit</span></span>
<span class="line"><span style="color:#24292e;">make_DB = sqlite3.connect(&#39;C:/hyungsik74/pycharm/db.sqlite3&#39;, isolation_level=None)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># Cursor</span></span>
<span class="line"><span style="color:#24292e;">data = make_DB.cursor()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 테이블 생성</span></span>
<span class="line"><span style="color:#24292e;">data.execute(&quot;CREATE TABLE IF NOT EXISTS test(id INTEGER PRIMARY KEY, username text, email text, phone text, website text, regdate text)&quot;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 테이블에 데이터 삽입</span></span>
<span class="line"><span style="color:#24292e;">data.execute(&quot;INSERT INTO test VALUES(1,&#39;kim&#39;,&#39;kim@.com&#39;,&#39;010-000-0000&#39;,&#39;wwww.com&#39;,?)&quot;,(nowDatetime,))</span></span></code></pre></div>`,17),d=[r];function m(h,_,y,u,b,g){return e(),a("div",null,d)}const S=s(c,[["render",m]]);export{w as __pageData,S as default};
