import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.e39b7a49.js";const p="/djangonote/assets/ch04-03-03-01.fdc4c7ca.png",o="/djangonote/assets/ch04-03-03-03-01.2651b7ad.png",e="/djangonote/assets/ch04-03-07-01.20b832c7.png",F=JSON.parse('{"title":"4.3 사용자 어플리케이션 작성","description":"","frontmatter":{},"headers":[],"relativePath":"ch04/ch04-03.md","filePath":"ch04/ch04-03.md"}'),t={name:"ch04/ch04-03.md"},c=l('<link rel="stylesheet" href="../css/style.css"><h1 id="_4-3-사용자-어플리케이션-작성" tabindex="-1">4.3 사용자 어플리케이션 작성 <a class="header-anchor" href="#_4-3-사용자-어플리케이션-작성" aria-label="Permalink to &quot;4.3 사용자 어플리케이션 작성&quot;">​</a></h1><p>이전 장에서 Polls 어플리케이션을 설계할 때 3개의 화면 페이지가 필요했습니다. 이 3개의 페이지에 대해서 필요한 뷰 와 템플릿을 작성하겠습니다. 화면을 작성하기 위해서 처리흐름에 대한 로직이 설계되어야 합니다. 여기서는 4개의 URL와 뷰와 3개의 템플릿 파일이 필요합니다.</p><p><img src="'+p+`" alt="ch04-03-03-01"></p><h2 id="_4-3-1-url-설계" tabindex="-1">4.3.1 URL 설계 <a class="header-anchor" href="#_4-3-1-url-설계" aria-label="Permalink to &quot;4.3.1 URL 설계&quot;">​</a></h2><p><strong>URL &amp; View 매핑</strong></p><table><thead><tr><th>URL 패턴</th><th>뷰 이름</th><th style="text-align:left;">뷰가 처리하는 내용</th></tr></thead><tbody><tr><td>/polls/</td><td>index()</td><td style="text-align:left;">index.html 템플릿을 보여 줍니다.</td></tr><tr><td>/polls/1/</td><td>detail()</td><td style="text-align:left;">detail.html 템플릿을 보여 줍니다.</td></tr><tr><td>/polls/1/vote</td><td>vote()</td><td style="text-align:left;">detail.html의 폼을 POST 방식으로 처리합니다.</td></tr><tr><td>/polls/1/results</td><td>results()</td><td style="text-align:left;">results.html 템플릿을 보여 줍니다.</td></tr><tr><td>/admin/</td><td>(기본제공)</td><td style="text-align:left;">관리자 사이트를 보여 줍니다. (장고제공)</td></tr></tbody></table><h2 id="_4-3-2-어플리케이션-생성" tabindex="-1">4.3.2 어플리케이션 생성 <a class="header-anchor" href="#_4-3-2-어플리케이션-생성" aria-label="Permalink to &quot;4.3.2 어플리케이션 생성&quot;">​</a></h2><p>다음은 파이썬 startapp 명령어로 어플리케이션을 생성하도록 하겠습니다. polls라는 어플리케이션 명을 입력합니다.</p><div class="console-block" id="console-block-1"><input class="c-tab-unix" id="c-tab-1-unix" type="radio" name="console-1" checked=""><label for="c-tab-1-unix" title="Linux/macOS">/</label><input class="c-tab-win" id="c-tab-1-win" type="radio" name="console-1"><label for="c-tab-1-win" title="Windows"></label><section class="c-content-unix" id="c-content-1-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">$</span><span class="gp">/home/djangouser&gt;</span> cd ch04
<span class="gp">$</span><span class="gp">/home/djangouser/ch04&gt;</span> pwd
/home/djangouser/ch04
<span class="gp">$</span><span class="gp">/home/djangouser/ch04&gt;</span> python manage.py startapp polls
</pre></div></div></section><section class="c-content-win" id="c-content-1-win" style=""><div class="highlight"><pre><span class="gp">C:\\Users\\djangouser&gt;</span> cd ch04
<span class="gp">C:\\Users\\djangouser\\ch04&gt;</span> cd 
C:\\Users\\djangouser\\ch04
<span class="gp">C:\\Users\\djangouser\\ch04&gt;</span> py manage.py startapp polls
</pre></div></section></div><p>어플리케이션 생성후 디렉토리 구조입니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.</span></span>
<span class="line"><span style="color:#e1e4e8;">└─ djangouser</span></span>
<span class="line"><span style="color:#e1e4e8;">  └─ ch04</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─ mysite</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ __init__.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ asgi.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ settings.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ urls.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  └─ wsgi.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─ polls</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ migrations</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  |  ├─ __init__.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  |  └─ 0001_initial.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ templates</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  |  ├─ polls</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  │  |  ├─ detail.html</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  │  |  ├─ index.html</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  │  |  └─ results.html</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ __init__.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ admin.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ apps.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ models.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ tests.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ urls.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  └─ views.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─ db.sqlite3</span></span>
<span class="line"><span style="color:#e1e4e8;">    └─ manage.py</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.</span></span>
<span class="line"><span style="color:#24292e;">└─ djangouser</span></span>
<span class="line"><span style="color:#24292e;">  └─ ch04</span></span>
<span class="line"><span style="color:#24292e;">    ├─ mysite</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ __init__.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ asgi.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ settings.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ urls.py</span></span>
<span class="line"><span style="color:#24292e;">    |  └─ wsgi.py</span></span>
<span class="line"><span style="color:#24292e;">    ├─ polls</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ migrations</span></span>
<span class="line"><span style="color:#24292e;">    │  |  ├─ __init__.py</span></span>
<span class="line"><span style="color:#24292e;">    │  |  └─ 0001_initial.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ templates</span></span>
<span class="line"><span style="color:#24292e;">    │  |  ├─ polls</span></span>
<span class="line"><span style="color:#24292e;">    |  │  |  ├─ detail.html</span></span>
<span class="line"><span style="color:#24292e;">    |  │  |  ├─ index.html</span></span>
<span class="line"><span style="color:#24292e;">    |  │  |  └─ results.html</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ __init__.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ admin.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ apps.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ models.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ tests.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ urls.py</span></span>
<span class="line"><span style="color:#24292e;">    |  └─ views.py</span></span>
<span class="line"><span style="color:#24292e;">    ├─ db.sqlite3</span></span>
<span class="line"><span style="color:#24292e;">    └─ manage.py</span></span></code></pre></div><h3 id="프로젝트-설정-파일-settings-py-추가" tabindex="-1">프로젝트 설정 파일(settings.py) 추가 <a class="header-anchor" href="#프로젝트-설정-파일-settings-py-추가" aria-label="Permalink to &quot;프로젝트 설정 파일(settings.py) 추가&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-TmUCs" id="tab-jTsTa__" checked="checked"><label for="tab-jTsTa__">ch04/mysite/settings.py</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Application definition</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">INSTALLED_APPS</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;polls.apps.PollsConfig&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;"># 추가\`</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.admin&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.auth&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.contenttypes&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.sessions&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.messages&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.staticfiles&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Application definition</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">INSTALLED_APPS</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;polls.apps.PollsConfig&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;"># 추가\`</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.admin&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.auth&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.contenttypes&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.sessions&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.messages&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.staticfiles&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div></div></div><h2 id="_4-3-3-설문조사-데이터모델-생성" tabindex="-1">4.3.3 설문조사 데이터모델 생성 <a class="header-anchor" href="#_4-3-3-설문조사-데이터모델-생성" aria-label="Permalink to &quot;4.3.3 설문조사 데이터모델 생성&quot;">​</a></h2><p>데이터모델 생성은 장고 프레임웍에서 데이터베이스 관련 테이블 등을 생성을 하는 단계입니다. 다음의 순서대로 생성합니다.</p><div class="console-block" id="console-block-2"><input class="c-tab-unix" id="c-tab-2-unix" type="radio" name="console-2" checked=""><label for="c-tab-2-unix" title="Linux/macOS">/</label><input class="c-tab-win" id="c-tab-2-win" type="radio" name="console-2"><label for="c-tab-2-win" title="Windows"></label><section class="c-content-unix" id="c-content-2-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">$</span><span class="gp">/home/djangouser/ch04&gt;</span> cd polls
<span class="gp">$</span><span class="gp">/home/djangouser/ch04/polls&gt;</span> pwd
/home/djangouser/ch04/polls
<span class="gp">$</span><span class="gp">/home/djangouser/ch04/polls&gt;</span> vi models.py
<span class="gp">$</span><span class="gp">/home/djangouser/ch04/polls&gt;</span> vi admin.py
<span class="gp">$</span><span class="gp">/home/djangouser/ch04/polls&gt;</span> cd ..
<span class="gp">$</span><span class="gp">/home/djangouser/ch04&gt;</span> pwd
/home/djangouser/ch04
<span class="gp">$</span><span class="gp">/home/djangouser/ch04&gt;</span> python manage.py makemigrations polls
<span class="gp">$</span><span class="gp">/home/djangouser/ch04&gt;</span> python manage.py migrate
<span class="gp">$</span><span class="gp">/home/djangouser/ch04&gt;</span> python manage.py runserver
</pre></div></div></section><section class="c-content-win" id="c-content-2-win" style=""><div class="highlight"><pre><span class="gp">C:\\Users\\djangouser\\ch04&gt;</span> cd polls
<span class="gp">C:\\Users\\djangouser\\ch04\\polls&gt;</span> cd 
C:\\Users\\djangouser\\ch04\\polls
<span class="gp">C:\\Users\\djangouser\\ch04\\polls&gt;</span> notepad models.py   // 테이블을 정의함
<span class="gp">C:\\Users\\djangouser\\ch04\\polls&gt;</span> notepad admin.py   // 관리자화면에 표시
<span class="gp">C:\\Users\\djangouser\\ch04\\polls&gt;</span> cd ..
C:\\Users\\djangouser\\ch04
<span class="gp">C:\\Users\\djangouser\\ch04&gt;</span> py manage.py makemigrations polls  // DB 변경사항
<p><span class="gp">C:\\Users\\djangouser\\ch04&gt;</span> py manage.py sqlmigrate polls 0001</p>
<p><span class="gp">C:\\Users\\djangouser\\ch04&gt;</span> py manage.py migrate   // DB 변경사항 반영
<span class="gp">C:\\Users\\djangouser\\ch04&gt;</span> py manage.py runserver   // 실행</p>
</pre></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-o9KyT" id="tab-V73CS_K" checked="checked"><label for="tab-V73CS_K">models.py</label><input type="radio" name="group-o9KyT" id="tab-LBhNWjo"><label for="tab-LBhNWjo">admins.py</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.db </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> models</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Question</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">models</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Model</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    question_text </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> models.CharField(</span><span style="color:#FFAB70;">max_length</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    pub_date </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> models.DateTimeField(</span><span style="color:#9ECBFF;">&quot;date published&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__str__</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.question_text</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Choice</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">models</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Model</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    question </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> models.ForeignKey(Question, </span><span style="color:#FFAB70;">on_delete</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">models.</span><span style="color:#79B8FF;">CASCADE</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    choice_text </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> models.CharField(</span><span style="color:#FFAB70;">max_length</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    votes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> models.IntegerField(</span><span style="color:#FFAB70;">default</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__str__</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.choice_text</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.db </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> models</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Question</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">models</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Model</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    question_text </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> models.CharField(</span><span style="color:#E36209;">max_length</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    pub_date </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> models.DateTimeField(</span><span style="color:#032F62;">&quot;date published&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__str__</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.question_text</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Choice</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">models</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Model</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    question </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> models.ForeignKey(Question, </span><span style="color:#E36209;">on_delete</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">models.</span><span style="color:#005CC5;">CASCADE</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    choice_text </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> models.CharField(</span><span style="color:#E36209;">max_length</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    votes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> models.IntegerField(</span><span style="color:#E36209;">default</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__str__</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.choice_text</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.contrib </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> .models </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Question, Choice</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">admin.site.register(Question)</span></span>
<span class="line"><span style="color:#E1E4E8;">admin.site.register(Choice)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.contrib </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> .models </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Question, Choice</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">admin.site.register(Question)</span></span>
<span class="line"><span style="color:#24292E;">admin.site.register(Choice)</span></span></code></pre></div></div></div><p>지금까지 작성한 내용을 확인하기 위해서, 프로젝트를 실행합니다. 관리자 페이지에 접속하면, 다음과 같이 새로 생성한 2개의 테이블을 확인 할 수 있습니다.</p><p>*Admin (<a href="http://127.0.0.1:8000/admin" target="_blank" rel="noreferrer">http://127.0.0.1:8000/admin</a>) 사이트 로그인 후 첫 페이지</p><p><img src="`+o+`" alt="ch04-03-03-03-01"></p><h2 id="_4-3-4-url-config" tabindex="-1">4.3.4 URL Config <a class="header-anchor" href="#_4-3-4-url-config" aria-label="Permalink to &quot;4.3.4 URL Config&quot;">​</a></h2><p>이전 장에서 처리 흐름에 따라 URL 및 View를 설계했습니다. URL config라 함은 이런 URL 과 뷰를 연결해 주는 작업입니다. 관리자 페이지를 포함해서 5개의 URL 과 뷰가 필요합니다.</p><div class="console-block" id="console-block-4"><input class="c-tab-unix" id="c-tab-4-unix" type="radio" name="console-4" checked=""><label for="c-tab-4-unix" title="Linux/macOS">/</label><input class="c-tab-win" id="c-tab-4-win" type="radio" name="console-4"><label for="c-tab-4-win" title="Windows"></label><section class="c-content-unix" id="c-content-4-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">$</span><span class="gp">/home/djangouser/ch04/mysite&gt;</span> cd /home/djangouser/ch04/mysite
<span class="gp">$</span><span class="gp">/home/djangouser/ch04/mysite&gt;</span> pwd
/home/djangouser/ch04/mysite
<span class="gp">$</span><span class="gp">/home/djangouser/ch04/mysite&gt;</span> vi urls.py
<p><span class="gp">$</span><span class="gp">/home/djangouser/ch04/&gt;</span> cd /home/djangouser/ch04/polls
<span class="gp">$</span><span class="gp">/home/djangouser/ch04/polls&gt;</span> pwd
/home/djangouser/ch04/polls
<span class="gp">$</span><span class="gp">/home/djangouser/ch04/polls&gt;</span> vi urls.py</p>
</pre></div></div></section><section class="c-content-win" id="c-content-4-win" style=""><div class="highlight"><pre><span class="gp">C:\\Users\\djangouser\\ch04\\mysite&gt;</span> cd 
C:\\Users\\djangouser\\ch04\\mysite
<span class="gp">C:\\Users\\djangouser\\ch04\\mysite&gt;</span> notepad urls.py
<span class="gp">C:\\Users\\djangouser\\ch04\\mysite&gt;</span> cd ..\\polls
C:\\Users\\djangouser\\ch04\\polls
<span class="gp">C:\\Users\\djangouser\\ch04\\polls&gt;</span> cd
C:\\Users\\djangouser\\ch04\\polls
<span class="gp">C:\\Users\\djangouser\\ch04\\polls&gt;</span> notepad urls.py
</pre></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-QiPWG" id="tab-NhAj1ff" checked="checked"><label for="tab-NhAj1ff">mysite/urls.py</label><input type="radio" name="group-QiPWG" id="tab-xO735am"><label for="tab-xO735am">polls/urls.py</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.contrib </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> admin</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.urls </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> include, path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">urlpatterns </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;polls/&quot;</span><span style="color:#E1E4E8;">, include(</span><span style="color:#9ECBFF;">&quot;polls.urls&quot;</span><span style="color:#E1E4E8;">)),</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;admin/&quot;</span><span style="color:#E1E4E8;">, admin.site.urls),</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.contrib </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> admin</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.urls </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> include, path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">urlpatterns </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;polls/&quot;</span><span style="color:#24292E;">, include(</span><span style="color:#032F62;">&quot;polls.urls&quot;</span><span style="color:#24292E;">)),</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;admin/&quot;</span><span style="color:#24292E;">, admin.site.urls),</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.urls </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> . </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> views</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app_name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;polls&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">urlpatterns </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">, views.index, </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;index&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;&lt;int:question_id&gt;/&quot;</span><span style="color:#E1E4E8;">, views.detail, </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;detail&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;&lt;int:question_id&gt;/results/&quot;</span><span style="color:#E1E4E8;">, views.results, </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;results&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;&lt;int:question_id&gt;/vote/&quot;</span><span style="color:#E1E4E8;">, views.vote, </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;vote&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.urls </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> . </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> views</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app_name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;polls&quot;</span></span>
<span class="line"><span style="color:#24292E;">urlpatterns </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, views.index, </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;index&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;&lt;int:question_id&gt;/&quot;</span><span style="color:#24292E;">, views.detail, </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;detail&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;&lt;int:question_id&gt;/results/&quot;</span><span style="color:#24292E;">, views.results, </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;results&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;&lt;int:question_id&gt;/vote/&quot;</span><span style="color:#24292E;">, views.vote, </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;vote&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div></div></div><h2 id="_4-3-5-tempate" tabindex="-1">4.3.5 Tempate <a class="header-anchor" href="#_4-3-5-tempate" aria-label="Permalink to &quot;4.3.5 Tempate&quot;">​</a></h2><p>이번 장에서는 하면 UI 에 해당하는 템플릿을 작성하겠습니다.</p><ul><li>index.html</li></ul><div class="console-block" id="console-block-5-1"><input class="c-tab-unix" id="c-tab-5-1-unix" type="radio" name="console-5-1" checked=""><label for="c-tab-5-1-unix" title="Linux/macOS">/</label><input class="c-tab-win" id="c-tab-5-1-win" type="radio" name="console-5-1"><label for="c-tab-5-1-win" title="Windows"></label><section class="c-content-unix" id="c-content-5-1-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">$</span><span class="gp">/home/djangouser/ch04&gt;</span> cd /home/djangouser/ch04/polls
<span class="gp">$</span><span class="gp">/home/djangouser/ch04/polls&gt;</span> pwd
/home/djangouser/ch04/polls
<span class="gp">$</span><span class="gp">/home/djangouser/ch04/polls&gt;</span> mkdir templates
<span class="gp">$</span><span class="gp">/home/djangouser/ch04/polls&gt;</span> mkdir templates/polls
<span class="gp">$</span><span class="gp">/home/djangouser/ch04/polls&gt;</span> cd templates/polls
<span class="gp">$</span><span class="gp">/home/djangouser/ch04/polls/templates/polls&gt;</span> vi index.html
</pre></div></div></section><section class="c-content-win" id="c-content-5-1-win" style=""><div class="highlight"><pre><span class="gp">C:\\Users\\djangouser\\ch04&gt;</span> cd C:\\Users\\djangouser\\ch04\\polls
<span class="gp">C:\\Users\\djangouser\\ch04\\polls&gt;</span> cd 
C:\\Users\\djangouser\\ch04\\polls
<span class="gp">C:\\Users\\djangouser\\ch04\\polls&gt;</span> mkdir templates
<span class="gp">C:\\Users\\djangouser\\ch04\\polls&gt;</span> mkdir templates\\polls
<span class="gp">C:\\Users\\djangouser\\ch04\\polls&gt;</span> cd templates\\polls
<span class="gp">C:\\Users\\djangouser\\ch04\\polls\\templates\\polls&gt;</span> notepad index.html
</pre></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-rVL4t" id="tab-sY6ugZN" checked="checked"><label for="tab-sY6ugZN">index.html</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{% if latest_question_list %}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {% for question in latest_question_list %}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/polls/{{ question.id }}/&quot;</span><span style="color:#E1E4E8;">&gt;{{ question.question_text }}&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {% endfor %}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">{% else %}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;No polls are available.&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">{% endif %}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{% if latest_question_list %}</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    {% for question in latest_question_list %}</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/polls/{{ question.id }}/&quot;</span><span style="color:#24292E;">&gt;{{ question.question_text }}&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    {% endfor %}</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">{% else %}</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;No polls are available.&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">{% endif %}</span></span></code></pre></div></div></div><p>-- detail.html</p><div class="console-block" id="console-block-5-2"><input class="c-tab-unix" id="c-tab-5-2-unix" type="radio" name="console-5-2" checked=""><label for="c-tab-5-2-unix" title="Linux/macOS">/</label><input class="c-tab-win" id="c-tab-5-2-win" type="radio" name="console-5-2"><label for="c-tab-5-2-win" title="Windows"></label><section class="c-content-unix" id="c-content-5-2-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">$</span><span class="gp">/home/djangouser/ch04/polls/templates/polls&gt;</span> pwd
/home/djangouser/ch04/polls/templates/polls
<span class="gp">$</span><span class="gp">/home/djangouser/ch04/polls/templates/polls&gt;</span> vi detail.html
</pre></div></div></section><section class="c-content-win" id="c-content-5-2-win" style=""><div class="highlight"><pre><span class="gp">C:\\Users\\djangouser\\ch04\\polls\\templates\\polls&gt;</span> cd 
C:\\Users\\djangouser\\ch04\\polls\\templates\\polls
<span class="gp">C:\\Users\\djangouser\\ch04\\polls\\templates\\polls&gt;</span> notepad detail.html
</pre></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-xLyFu" id="tab-HXN5f2Z" checked="checked"><label for="tab-HXN5f2Z">detail.html</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;{{ question.question_text }}&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!--</span></span>
<span class="line"><span style="color:#6A737D;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#6A737D;">{% for choice in question.choice_set.all %}</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;li&gt;{{ choice.choice_text }}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#6A737D;">{% endfor %}</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#6A737D;">--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">form</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">action</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{% url &#39;polls:vote&#39; question.id %}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">method</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;post&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">{% csrf_token %}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">fieldset</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">legend</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;{{ question.question_text }}&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">legend</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {% if error_message %}&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">strong</span><span style="color:#E1E4E8;">&gt;{{ error_message }}&lt;/</span><span style="color:#85E89D;">strong</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;{% endif %}</span></span>
<span class="line"><span style="color:#E1E4E8;">    {% for choice in question.choice_set.all %}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;radio&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;choice&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;choice{{ forloop.counter }}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{ choice.id }}&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">label</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;choice{{ forloop.counter }}&quot;</span><span style="color:#E1E4E8;">&gt;{{ choice.choice_text }}&lt;/</span><span style="color:#85E89D;">label</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {% endfor %}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">fieldset</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;submit&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Vote&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">form</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;{{ question.question_text }}&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!--</span></span>
<span class="line"><span style="color:#6A737D;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#6A737D;">{% for choice in question.choice_set.all %}</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;li&gt;{{ choice.choice_text }}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#6A737D;">{% endfor %}</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#6A737D;">--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">form</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">action</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{% url &#39;polls:vote&#39; question.id %}&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">method</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;post&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">{% csrf_token %}</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">fieldset</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">legend</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;{{ question.question_text }}&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">legend</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    {% if error_message %}&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">strong</span><span style="color:#24292E;">&gt;{{ error_message }}&lt;/</span><span style="color:#22863A;">strong</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;{% endif %}</span></span>
<span class="line"><span style="color:#24292E;">    {% for choice in question.choice_set.all %}</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;radio&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;choice&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;choice{{ forloop.counter }}&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{{ choice.id }}&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">label</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;choice{{ forloop.counter }}&quot;</span><span style="color:#24292E;">&gt;{{ choice.choice_text }}&lt;/</span><span style="color:#22863A;">label</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    {% endfor %}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">fieldset</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;submit&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Vote&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">form</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></div></div><p>-- results.html</p><div class="console-block" id="console-block-5-3"><input class="c-tab-unix" id="c-tab-5-3-unix" type="radio" name="console-5-3" checked=""><label for="c-tab-5-3-unix" title="Linux/macOS">/</label><input class="c-tab-win" id="c-tab-5-3-win" type="radio" name="console-5-3"><label for="c-tab-5-3-win" title="Windows"></label><section class="c-content-unix" id="c-content-5-3-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">$</span><span class="gp">/home/djangouser/ch04/polls/templates/polls&gt;</span> pwd
/home/djangouser/ch04/polls/templates/polls
<span class="gp">$</span><span class="gp">/home/djangouser/ch04/polls/templates/polls&gt;</span> vi results.html
</pre></div></div></section><section class="c-content-win" id="c-content-5-3-win" style=""><div class="highlight"><pre><span class="gp">C:\\Users\\djangouser\\ch04\\polls\\templates\\polls&gt;</span> cd 
C:\\Users\\djangouser\\ch04\\polls\\templates\\polls
<span class="gp">C:\\Users\\djangouser\\ch04\\polls\\templates\\polls&gt;</span> notepad results.html
</pre></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-RExwu" id="tab-X50w9EH" checked="checked"><label for="tab-X50w9EH">results.html</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;{{ question.question_text }}&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">{% for choice in question.choice_set.all %}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;{{ choice.choice_text }} -- {{ choice.votes }} vote{{ choice.votes|pluralize }}&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">{% endfor %}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{% url &#39;polls:detail&#39; question.id %}&quot;</span><span style="color:#E1E4E8;">&gt;Vote again?&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;{{ question.question_text }}&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">{% for choice in question.choice_set.all %}</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;{{ choice.choice_text }} -- {{ choice.votes }} vote{{ choice.votes|pluralize }}&lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">{% endfor %}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{% url &#39;polls:detail&#39; question.id %}&quot;</span><span style="color:#24292E;">&gt;Vote again?&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></div></div><h2 id="_4-3-6-view" tabindex="-1">4.3.6 View <a class="header-anchor" href="#_4-3-6-view" aria-label="Permalink to &quot;4.3.6 View&quot;">​</a></h2><p>polls/views.py</p><ul><li>index</li><li>detail</li><li>vote</li><li>results</li></ul><div class="console-block" id="console-block-6"><input class="c-tab-unix" id="c-tab-6-unix" type="radio" name="console-6" checked=""><label for="c-tab-6-unix" title="Linux/macOS">/</label><input class="c-tab-win" id="c-tab-6-win" type="radio" name="console-6"><label for="c-tab-6-win" title="Windows"></label><section class="c-content-unix" id="c-content-6-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">$</span><span class="gp">/home/djangouser/ch04&gt;</span> cd /home/djangouser/ch04/polls
<span class="gp">$</span><span class="gp">/home/djangouser/ch04/polls&gt;</span> pwd
/home/djangouser/ch04/polls
<span class="gp">$</span><span class="gp">/home/djangouser/ch04/polls&gt;</span> vi views.py
</pre></div></div></section><section class="c-content-win" id="c-content-6-win" style=""><div class="highlight"><pre><span class="gp">C:\\Users\\djangouser\\ch04&gt;</span> cd C:\\Users\\djangouser\\ch04\\polls
<span class="gp">C:\\Users\\djangouser\\ch04\\polls&gt;</span> cd 
C:\\Users\\djangouser\\ch04\\polls
<span class="gp">C:\\Users\\djangouser\\ch04\\polls&gt;</span> notepad views.py
</pre></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-IPK4w" id="tab-31JMSsZ" checked="checked"><label for="tab-31JMSsZ">#index</label><input type="radio" name="group-IPK4w" id="tab-FiZ7SC4"><label for="tab-FiZ7SC4">#detail</label><input type="radio" name="group-IPK4w" id="tab-seMyN89"><label for="tab-seMyN89">#vote</label><input type="radio" name="group-IPK4w" id="tab-lj91zua"><label for="tab-lj91zua">#results</label><input type="radio" name="group-IPK4w" id="tab-Ek0t3g1"><label for="tab-Ek0t3g1">views.py#all</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.shortcuts </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> render</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> .models </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Question</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">(request):</span></span>
<span class="line"><span style="color:#E1E4E8;">    latest_question_list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Question.objects.order_by(</span><span style="color:#9ECBFF;">&quot;-pub_date&quot;</span><span style="color:#E1E4E8;">)[:</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    context </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span><span style="color:#9ECBFF;">&quot;latest_question_list&quot;</span><span style="color:#E1E4E8;">: latest_question_list}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> render(request, </span><span style="color:#9ECBFF;">&quot;polls/index.html&quot;</span><span style="color:#E1E4E8;">, context)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.shortcuts </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> render</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> .models </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Question</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">(request):</span></span>
<span class="line"><span style="color:#24292E;">    latest_question_list </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Question.objects.order_by(</span><span style="color:#032F62;">&quot;-pub_date&quot;</span><span style="color:#24292E;">)[:</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    context </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#032F62;">&quot;latest_question_list&quot;</span><span style="color:#24292E;">: latest_question_list}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> render(request, </span><span style="color:#032F62;">&quot;polls/index.html&quot;</span><span style="color:#24292E;">, context)</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.shortcuts </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> get_object_or_404, render</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> .models </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Question</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">detail</span><span style="color:#E1E4E8;">(request, question_id):</span></span>
<span class="line"><span style="color:#E1E4E8;">    question </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> get_object_or_404(Question, </span><span style="color:#FFAB70;">pk</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">question_id)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> render(request, </span><span style="color:#9ECBFF;">&quot;polls/detail.html&quot;</span><span style="color:#E1E4E8;">, {</span><span style="color:#9ECBFF;">&quot;question&quot;</span><span style="color:#E1E4E8;">: question})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.shortcuts </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> get_object_or_404, render</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> .models </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Question</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">detail</span><span style="color:#24292E;">(request, question_id):</span></span>
<span class="line"><span style="color:#24292E;">    question </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> get_object_or_404(Question, </span><span style="color:#E36209;">pk</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">question_id)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> render(request, </span><span style="color:#032F62;">&quot;polls/detail.html&quot;</span><span style="color:#24292E;">, {</span><span style="color:#032F62;">&quot;question&quot;</span><span style="color:#24292E;">: question})</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.http </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> HttpResponse, HttpResponseRedirect</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.shortcuts </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> get_object_or_404, render</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.urls </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> reverse</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> .models </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Choice, Question</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">vote</span><span style="color:#E1E4E8;">(request, question_id):</span></span>
<span class="line"><span style="color:#E1E4E8;">    question </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> get_object_or_404(Question, </span><span style="color:#FFAB70;">pk</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">question_id)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        selected_choice </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> question.choice_set.get(</span><span style="color:#FFAB70;">pk</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">request.</span><span style="color:#79B8FF;">POST</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&quot;choice&quot;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">except</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">KeyError</span><span style="color:#E1E4E8;">, Choice.DoesNotExist):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># Redisplay the question voting form.</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> render(</span></span>
<span class="line"><span style="color:#E1E4E8;">            request,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;polls/detail.html&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;question&quot;</span><span style="color:#E1E4E8;">: question,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;error_message&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;You didn&#39;t select a choice.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        )</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        selected_choice.votes </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">        selected_choice.save()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># Always return an HttpResponseRedirect after successfully dealing</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># with POST data. This prevents data from being posted twice if a</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># user hits the Back button.</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> HttpResponseRedirect(reverse(</span><span style="color:#9ECBFF;">&quot;polls:results&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">args</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">(question.id,)))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.http </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> HttpResponse, HttpResponseRedirect</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.shortcuts </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> get_object_or_404, render</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.urls </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> reverse</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> .models </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Choice, Question</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">vote</span><span style="color:#24292E;">(request, question_id):</span></span>
<span class="line"><span style="color:#24292E;">    question </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> get_object_or_404(Question, </span><span style="color:#E36209;">pk</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">question_id)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">try</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        selected_choice </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> question.choice_set.get(</span><span style="color:#E36209;">pk</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">request.</span><span style="color:#005CC5;">POST</span><span style="color:#24292E;">[</span><span style="color:#032F62;">&quot;choice&quot;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">except</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">KeyError</span><span style="color:#24292E;">, Choice.DoesNotExist):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># Redisplay the question voting form.</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> render(</span></span>
<span class="line"><span style="color:#24292E;">            request,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;polls/detail.html&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;question&quot;</span><span style="color:#24292E;">: question,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;error_message&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;You didn&#39;t select a choice.&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        )</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        selected_choice.votes </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">        selected_choice.save()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># Always return an HttpResponseRedirect after successfully dealing</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># with POST data. This prevents data from being posted twice if a</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># user hits the Back button.</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> HttpResponseRedirect(reverse(</span><span style="color:#032F62;">&quot;polls:results&quot;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">args</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">(question.id,)))</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.shortcuts </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> get_object_or_404, render</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">results</span><span style="color:#E1E4E8;">(request, question_id):</span></span>
<span class="line"><span style="color:#E1E4E8;">    question </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> get_object_or_404(Question, </span><span style="color:#FFAB70;">pk</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">question_id)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> render(request, </span><span style="color:#9ECBFF;">&quot;polls/results.html&quot;</span><span style="color:#E1E4E8;">, {</span><span style="color:#9ECBFF;">&quot;question&quot;</span><span style="color:#E1E4E8;">: question})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.shortcuts </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> get_object_or_404, render</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">results</span><span style="color:#24292E;">(request, question_id):</span></span>
<span class="line"><span style="color:#24292E;">    question </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> get_object_or_404(Question, </span><span style="color:#E36209;">pk</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">question_id)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> render(request, </span><span style="color:#032F62;">&quot;polls/results.html&quot;</span><span style="color:#24292E;">, {</span><span style="color:#032F62;">&quot;question&quot;</span><span style="color:#24292E;">: question})</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.http </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> HttpResponse, HttpResponseRedirect</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.shortcuts </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> render</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.urls </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> reverse</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.shortcuts </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> get_object_or_404, render</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> .models </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Question, Choice</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">(request):</span></span>
<span class="line"><span style="color:#E1E4E8;">    latest_question_list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Question.objects.order_by(</span><span style="color:#9ECBFF;">&quot;-pub_date&quot;</span><span style="color:#E1E4E8;">)[:</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    context </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span><span style="color:#9ECBFF;">&quot;latest_question_list&quot;</span><span style="color:#E1E4E8;">: latest_question_list}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> render(request, </span><span style="color:#9ECBFF;">&quot;polls/index.html&quot;</span><span style="color:#E1E4E8;">, context)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">detail</span><span style="color:#E1E4E8;">(request, question_id):</span></span>
<span class="line"><span style="color:#E1E4E8;">    question </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> get_object_or_404(Question, </span><span style="color:#FFAB70;">pk</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">question_id)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> render(request, </span><span style="color:#9ECBFF;">&quot;polls/detail.html&quot;</span><span style="color:#E1E4E8;">, {</span><span style="color:#9ECBFF;">&quot;question&quot;</span><span style="color:#E1E4E8;">: question})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">vote</span><span style="color:#E1E4E8;">(request, question_id):</span></span>
<span class="line"><span style="color:#E1E4E8;">    question </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> get_object_or_404(Question, </span><span style="color:#FFAB70;">pk</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">question_id)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        selected_choice </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> question.choice_set.get(</span><span style="color:#FFAB70;">pk</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">request.</span><span style="color:#79B8FF;">POST</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&quot;choice&quot;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">except</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">KeyError</span><span style="color:#E1E4E8;">, Choice.DoesNotExist):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># Redisplay the question voting form.</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> render(</span></span>
<span class="line"><span style="color:#E1E4E8;">            request,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;polls/detail.html&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;question&quot;</span><span style="color:#E1E4E8;">: question,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;error_message&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;You didn&#39;t select a choice.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        )</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        selected_choice.votes </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">        selected_choice.save()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># Always return an HttpResponseRedirect after successfully dealing</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># with POST data. This prevents data from being posted twice if a</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># user hits the Back button.</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> HttpResponseRedirect(reverse(</span><span style="color:#9ECBFF;">&quot;polls:results&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">args</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">(question.id,)))</span></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">results</span><span style="color:#E1E4E8;">(request, question_id):</span></span>
<span class="line"><span style="color:#E1E4E8;">    question </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> get_object_or_404(Question, </span><span style="color:#FFAB70;">pk</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">question_id)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> render(request, </span><span style="color:#9ECBFF;">&quot;polls/results.html&quot;</span><span style="color:#E1E4E8;">, {</span><span style="color:#9ECBFF;">&quot;question&quot;</span><span style="color:#E1E4E8;">: question})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.http </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> HttpResponse, HttpResponseRedirect</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.shortcuts </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> render</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.urls </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> reverse</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.shortcuts </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> get_object_or_404, render</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> .models </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Question, Choice</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">(request):</span></span>
<span class="line"><span style="color:#24292E;">    latest_question_list </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Question.objects.order_by(</span><span style="color:#032F62;">&quot;-pub_date&quot;</span><span style="color:#24292E;">)[:</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    context </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#032F62;">&quot;latest_question_list&quot;</span><span style="color:#24292E;">: latest_question_list}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> render(request, </span><span style="color:#032F62;">&quot;polls/index.html&quot;</span><span style="color:#24292E;">, context)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">detail</span><span style="color:#24292E;">(request, question_id):</span></span>
<span class="line"><span style="color:#24292E;">    question </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> get_object_or_404(Question, </span><span style="color:#E36209;">pk</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">question_id)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> render(request, </span><span style="color:#032F62;">&quot;polls/detail.html&quot;</span><span style="color:#24292E;">, {</span><span style="color:#032F62;">&quot;question&quot;</span><span style="color:#24292E;">: question})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">vote</span><span style="color:#24292E;">(request, question_id):</span></span>
<span class="line"><span style="color:#24292E;">    question </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> get_object_or_404(Question, </span><span style="color:#E36209;">pk</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">question_id)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">try</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        selected_choice </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> question.choice_set.get(</span><span style="color:#E36209;">pk</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">request.</span><span style="color:#005CC5;">POST</span><span style="color:#24292E;">[</span><span style="color:#032F62;">&quot;choice&quot;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">except</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">KeyError</span><span style="color:#24292E;">, Choice.DoesNotExist):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># Redisplay the question voting form.</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> render(</span></span>
<span class="line"><span style="color:#24292E;">            request,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;polls/detail.html&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;question&quot;</span><span style="color:#24292E;">: question,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;error_message&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;You didn&#39;t select a choice.&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        )</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        selected_choice.votes </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">        selected_choice.save()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># Always return an HttpResponseRedirect after successfully dealing</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># with POST data. This prevents data from being posted twice if a</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># user hits the Back button.</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> HttpResponseRedirect(reverse(</span><span style="color:#032F62;">&quot;polls:results&quot;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">args</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">(question.id,)))</span></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">results</span><span style="color:#24292E;">(request, question_id):</span></span>
<span class="line"><span style="color:#24292E;">    question </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> get_object_or_404(Question, </span><span style="color:#E36209;">pk</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">question_id)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> render(request, </span><span style="color:#032F62;">&quot;polls/results.html&quot;</span><span style="color:#24292E;">, {</span><span style="color:#032F62;">&quot;question&quot;</span><span style="color:#24292E;">: question})</span></span></code></pre></div></div></div><h2 id="_4-3-7-실행하기" tabindex="-1">4.3.7 실행하기 <a class="header-anchor" href="#_4-3-7-실행하기" aria-label="Permalink to &quot;4.3.7 실행하기&quot;">​</a></h2><div class="console-block" id="console-block-7"><input class="c-tab-unix" id="c-tab-7-unix" type="radio" name="console-7" checked=""><label for="c-tab-7-unix" title="Linux/macOS">/</label><input class="c-tab-win" id="c-tab-7-win" type="radio" name="console-7"><label for="c-tab-7-win" title="Windows"></label><section class="c-content-unix" id="c-content-7-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">$</span><span class="gp">/home/djangouser/ch04&gt;</span> cd /home/djangouser/ch04
<span class="gp">$</span><span class="gp">/home/djangouser/ch04&gt;</span> pwd
/home/djangouser/ch04
<span class="gp">$</span><span class="gp">/home/djangouser/ch04&gt;</span> python manage.py runserver
</pre></div></div></section><section class="c-content-win" id="c-content-7-win" style=""><div class="highlight"><pre><span class="gp">C:\\Users\\djangouser\\ch04&gt;</span> cd C:\\Users\\djangouser\\ch04
<span class="gp">C:\\Users\\djangouser\\ch04&gt;</span> cd 
C:\\Users\\djangouser\\ch04
<span class="gp">C:\\Users\\djangouser\\ch04&gt;</span> py manage.py runserver
</pre></div></section></div><p><a href="http://127.0.0.1:8000/polls" target="_blank" rel="noreferrer">http://127.0.0.1:8000/polls</a></p><p><img src="`+e+'" alt="ch04-03-07-03-01"></p><p>어플리케이션을 실행 하면 위와 같이 표시됩니다. 투표항목이 아직 등록되어 있지 않아서 &quot;No polls are available&quot; 라고 표시됩니다. 다음장 관리자 페이지에서 설문항목을 신규로 등록하면 리스트가 표시됩니다.</p>',46),r=[c];function i(y,E,d,u,g,h){return n(),a("div",null,r)}const q=s(t,[["render",i]]);export{F as __pageData,q as default};
