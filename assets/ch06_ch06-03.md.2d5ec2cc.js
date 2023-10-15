import{_ as n,o as s,c as a,Q as e}from"./chunks/framework.4976f53a.js";const p="/djangonote/assets/ch06-03-01_01.d1eab1af.png",l="/djangonote/assets/ch06-03-01_02.9517a0bd.png",t="/djangonote/assets/ch06-03-01_03.e3d1a405.png",o="/djangonote/assets/ch06-03-01_04.513df5db.png",c="/djangonote/assets/ch06-03-01_05.5b09223b.png",i="/djangonote/assets/ch06-03-01_06.2c78d947.png",r="/djangonote/assets/ch06-03-02_01.b16c7364.png",g="/djangonote/assets/ch06-03-02_03.242970ce.png",y="/djangonote/assets/ch06-03-02_04.2cff188a.png",h="/djangonote/assets/ch06-03-02_05.2ac9f51c.png",d="/djangonote/assets/ch06-03-02_06.259adaf9.png",m="/djangonote/assets/ch06-03-02_07.770bd59b.png",_="/djangonote/assets/ch06-03-02_08.b7991df1.png",u="/djangonote/assets/ch06-03-02_09.d1f98d9c.png",v="/djangonote/assets/ch06-03-02_10.51c17422.png",f="/djangonote/assets/ch06-03-02_11.f6f9b354.png",b="/djangonote/assets/ch06-03-02_12.b2954742.png",B=JSON.parse('{"title":"6-3. 프로젝트 기본구조 만들기","description":"","frontmatter":{},"headers":[],"relativePath":"ch06/ch06-03.md","filePath":"ch06/ch06-03.md"}'),j={name:"ch06/ch06-03.md"},k=e('<link rel="stylesheet" href="../css/style.css"><h1 id="_6-3-프로젝트-기본구조-만들기" tabindex="-1">6-3. 프로젝트 기본구조 만들기 <a class="header-anchor" href="#_6-3-프로젝트-기본구조-만들기" aria-label="Permalink to &quot;6-3. 프로젝트 기본구조 만들기&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p></div><h2 id="_6-3-1-pycharm-과-github-연동" tabindex="-1">6-3-1. Pycharm 과 GitHub 연동 <a class="header-anchor" href="#_6-3-1-pycharm-과-github-연동" aria-label="Permalink to &quot;6-3-1. Pycharm 과 GitHub 연동&quot;">​</a></h2><ol><li>GitHub &gt; Code &gt; Local Tap &gt; HTTPS URL 복사한다.</li></ol><p><img src="'+p+'" alt="ch06-03-01_01.png"> 그림6-3-1 GitHub Clone URL 복사</p><ol start="2"><li>파이참 신규 프로젝트 생성한다.</li></ol><p><img src="'+l+'" alt="ch06-03-01_02.png"> 그림6-3-2 파이참 신규 프로젝트 생성화면</p><ol start="3"><li>파이참 &gt; Get from VCS 선택 화면입니다.</li></ol><p><img src="'+t+'" alt="ch06-03-01_03.png"> 그림6-3-3 파이참 GitHub 연결</p><p><img src="'+o+'" alt="ch06-03-01_04.png"> 그림6-3-4 프로젝트 디렉토리 설정</p><p><img src="'+c+'" alt="ch06-03-01_05.png"> 그림6-3-5 레포지토리 Sync 화면</p><p><img src="'+i+`" alt="ch06-03-01_06.png"> 그림6-3-6 파이참 프로젝트 생성 완료 화면</p><h2 id="_6-3-2-pycharm-기본-프로젝트-만들기" tabindex="-1">6-3-2. Pycharm 기본 프로젝트 만들기 <a class="header-anchor" href="#_6-3-2-pycharm-기본-프로젝트-만들기" aria-label="Permalink to &quot;6-3-2. Pycharm 기본 프로젝트 만들기&quot;">​</a></h2><ol><li>Virtual Envirment 설정</li></ol><div class="console-block" id="console-block-2"><input class="c-tab-win" id="c-tab-2-win" type="radio" name="console-2" checked=""><label for="c-tab-2-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-2-unix" type="radio" name="console-2"><label for="c-tab-2-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-2-win" style=""><div class="highlight"><pre>windows command   
python --version
python -m venv venv
cd venv/Scripts
activate 
(venv)
python -m django --version    # 장고 설치 및 버전확인
python -m pip install django  # 장고 설치 (신규 가상환경 생성시 장고 설치 필요함)
</pre></div></section><section class="c-content-unix" id="c-content-2-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>linux command 
<p>$/home/hyungsik74/pycharm/dstragram-project&gt; python --version
$/home/hyungsik74/pycharm/dstragram-project&gt; python -m venv venv
$/home/hyungsik74/pycharm/dstragram-project&gt; source venv/bin/activate
(venv) $/home/hyungsik74/pycharm/dstragram-project&gt;
(venv) $/home/hyungsik74/pycharm/dstragram-project&gt; python -m django --version   # 장고 설치 및 버전확인
(venv) $/home/hyungsik74/pycharm/dstragram-project&gt; python -m pip install django # 장고 설치 (신규 가상환경 생성시 장고 설치 필요함)</p>
</pre></div></div></section></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">(venv) PS C:\\hyungsik74\\pycharm\\dstagram-project&gt; python -m pip install django</span></span>
<span class="line"><span style="color:#e1e4e8;">Collecting django</span></span>
<span class="line"><span style="color:#e1e4e8;">  Obtaining dependency information for django from https://files.pythonhosted.org/packages/bf/8b/c38f2354b6093d9ba310a14b43a830fdf776edd60c2e25c7c5f4d23cc243/Dja</span></span>
<span class="line"><span style="color:#e1e4e8;">ngo-4.2.5-py3-none-any.whl.metadata</span></span>
<span class="line"><span style="color:#e1e4e8;">  Using cached Django-4.2.5-py3-none-any.whl.metadata (4.1 kB)</span></span>
<span class="line"><span style="color:#e1e4e8;">Collecting asgiref&lt;4,&gt;=3.6.0 (from django)</span></span>
<span class="line"><span style="color:#e1e4e8;">  Obtaining dependency information for asgiref&lt;4,&gt;=3.6.0 from https://files.pythonhosted.org/packages/9b/80/b9051a4a07ad231558fcd8ffc89232711b4e618c15cb7a392a173</span></span>
<span class="line"><span style="color:#e1e4e8;">84bbeef/asgiref-3.7.2-py3-none-any.whl.metadata</span></span>
<span class="line"><span style="color:#e1e4e8;">  Using cached asgiref-3.7.2-py3-none-any.whl.metadata (9.2 kB)</span></span>
<span class="line"><span style="color:#e1e4e8;">Collecting sqlparse&gt;=0.3.1 (from django)</span></span>
<span class="line"><span style="color:#e1e4e8;">  Using cached sqlparse-0.4.4-py3-none-any.whl (41 kB)</span></span>
<span class="line"><span style="color:#e1e4e8;">Collecting tzdata (from django)</span></span>
<span class="line"><span style="color:#e1e4e8;">  Using cached tzdata-2023.3-py2.py3-none-any.whl (341 kB)</span></span>
<span class="line"><span style="color:#e1e4e8;">Using cached Django-4.2.5-py3-none-any.whl (8.0 MB)</span></span>
<span class="line"><span style="color:#e1e4e8;">Using cached asgiref-3.7.2-py3-none-any.whl (24 kB)</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing collected packages: tzdata, sqlparse, asgiref, django</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed asgiref-3.7.2 django-4.2.5 sqlparse-0.4.4 tzdata-2023.3</span></span>
<span class="line"><span style="color:#e1e4e8;">(venv) PS C:\\hyungsik74\\pycharm\\dstagram-project&gt; python -m django --version  </span></span>
<span class="line"><span style="color:#e1e4e8;">4.2.5</span></span>
<span class="line"><span style="color:#e1e4e8;">(venv) PS C:\\hyungsik74\\pycharm\\dstagram-project&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">(venv) PS C:\\hyungsik74\\pycharm\\dstagram-project&gt; python -m pip install django</span></span>
<span class="line"><span style="color:#24292e;">Collecting django</span></span>
<span class="line"><span style="color:#24292e;">  Obtaining dependency information for django from https://files.pythonhosted.org/packages/bf/8b/c38f2354b6093d9ba310a14b43a830fdf776edd60c2e25c7c5f4d23cc243/Dja</span></span>
<span class="line"><span style="color:#24292e;">ngo-4.2.5-py3-none-any.whl.metadata</span></span>
<span class="line"><span style="color:#24292e;">  Using cached Django-4.2.5-py3-none-any.whl.metadata (4.1 kB)</span></span>
<span class="line"><span style="color:#24292e;">Collecting asgiref&lt;4,&gt;=3.6.0 (from django)</span></span>
<span class="line"><span style="color:#24292e;">  Obtaining dependency information for asgiref&lt;4,&gt;=3.6.0 from https://files.pythonhosted.org/packages/9b/80/b9051a4a07ad231558fcd8ffc89232711b4e618c15cb7a392a173</span></span>
<span class="line"><span style="color:#24292e;">84bbeef/asgiref-3.7.2-py3-none-any.whl.metadata</span></span>
<span class="line"><span style="color:#24292e;">  Using cached asgiref-3.7.2-py3-none-any.whl.metadata (9.2 kB)</span></span>
<span class="line"><span style="color:#24292e;">Collecting sqlparse&gt;=0.3.1 (from django)</span></span>
<span class="line"><span style="color:#24292e;">  Using cached sqlparse-0.4.4-py3-none-any.whl (41 kB)</span></span>
<span class="line"><span style="color:#24292e;">Collecting tzdata (from django)</span></span>
<span class="line"><span style="color:#24292e;">  Using cached tzdata-2023.3-py2.py3-none-any.whl (341 kB)</span></span>
<span class="line"><span style="color:#24292e;">Using cached Django-4.2.5-py3-none-any.whl (8.0 MB)</span></span>
<span class="line"><span style="color:#24292e;">Using cached asgiref-3.7.2-py3-none-any.whl (24 kB)</span></span>
<span class="line"><span style="color:#24292e;">Installing collected packages: tzdata, sqlparse, asgiref, django</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed asgiref-3.7.2 django-4.2.5 sqlparse-0.4.4 tzdata-2023.3</span></span>
<span class="line"><span style="color:#24292e;">(venv) PS C:\\hyungsik74\\pycharm\\dstagram-project&gt; python -m django --version  </span></span>
<span class="line"><span style="color:#24292e;">4.2.5</span></span>
<span class="line"><span style="color:#24292e;">(venv) PS C:\\hyungsik74\\pycharm\\dstagram-project&gt;</span></span></code></pre></div><p><img src="`+r+`" alt="ch06-03-02_01.png"> 그림6-3-2 venv 생성후 프로젝트 폴더 구조</p><ol start="2"><li>startproect 생성</li><li>db migrate 생성</li><li>admin id/password 생성</li></ol><p>django-admin startproject config . python manage.py migrate python manage.py createsuperuser python manage.py runserver</p><div class="console-block" id="console-block-3"><input class="c-tab-win" id="c-tab-3-win" type="radio" name="console-3" checked=""><label for="c-tab-3-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-3-unix" type="radio" name="console-3"><label for="c-tab-3-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-3-win" style=""><div class="highlight"><pre>windows command   
<p>django-admin startproject config .
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver</p>
</pre></div></section><section class="c-content-unix" id="c-content-3-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>linux command 
<p>venv) $/home/hyungsik74/pycharm/dstragram-project&gt; django-admin startproject config .
venv) $/home/hyungsik74/pycharm/dstragram-project&gt; python manage.py migrate
venv) $/home/hyungsik74/pycharm/dstragram-project&gt; python manage.py createsuperuser
venv) $/home/hyungsik74/pycharm/dstragram-project&gt; python manage.py runserver</p>
</pre></div></div></section></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">(venv) PS C:\\hyungsik74\\pycharm\\dstagram-project&gt; django-admin startproject config .</span></span>
<span class="line"><span style="color:#e1e4e8;">(venv) PS C:\\hyungsik74\\pycharm\\dstagram-project&gt; </span></span>
<span class="line"><span style="color:#e1e4e8;">(venv) PS C:\\hyungsik74\\pycharm\\dstagram-project&gt; python manage.py migrate</span></span>
<span class="line"><span style="color:#e1e4e8;">Operations to perform:</span></span>
<span class="line"><span style="color:#e1e4e8;">  Apply all migrations: admin, auth, contenttypes, sessions</span></span>
<span class="line"><span style="color:#e1e4e8;">Running migrations:                                        </span></span>
<span class="line"><span style="color:#e1e4e8;">  Applying contenttypes.0001_initial... OK</span></span>
<span class="line"><span style="color:#e1e4e8;">  Applying auth.0001_initial... OK        </span></span>
<span class="line"><span style="color:#e1e4e8;">  Applying admin.0001_initial... OK</span></span>
<span class="line"><span style="color:#e1e4e8;">  Applying admin.0002_logentry_remove_auto_add... OK</span></span>
<span class="line"><span style="color:#e1e4e8;">  Applying admin.0003_logentry_add_action_flag_choices... OK</span></span>
<span class="line"><span style="color:#e1e4e8;">  Applying contenttypes.0002_remove_content_type_name... OK</span></span>
<span class="line"><span style="color:#e1e4e8;">  Applying auth.0002_alter_permission_name_max_length... OK</span></span>
<span class="line"><span style="color:#e1e4e8;">  Applying auth.0003_alter_user_email_max_length... OK</span></span>
<span class="line"><span style="color:#e1e4e8;">  Applying auth.0004_alter_user_username_opts... OK</span></span>
<span class="line"><span style="color:#e1e4e8;">  Applying auth.0005_alter_user_last_login_null... OK</span></span>
<span class="line"><span style="color:#e1e4e8;">  Applying auth.0006_require_contenttypes_0002... OK       </span></span>
<span class="line"><span style="color:#e1e4e8;">  Applying auth.0007_alter_validators_add_error_messages... OK</span></span>
<span class="line"><span style="color:#e1e4e8;">  Applying auth.0008_alter_user_username_max_length... OK</span></span>
<span class="line"><span style="color:#e1e4e8;">  Applying auth.0009_alter_user_last_name_max_length... OK</span></span>
<span class="line"><span style="color:#e1e4e8;">  Applying auth.0010_alter_group_name_max_length... OK</span></span>
<span class="line"><span style="color:#e1e4e8;">  Applying auth.0011_update_proxy_permissions... OK</span></span>
<span class="line"><span style="color:#e1e4e8;">  Applying auth.0012_alter_user_first_name_max_length... OK</span></span>
<span class="line"><span style="color:#e1e4e8;">  Applying sessions.0001_initial... OK</span></span>
<span class="line"><span style="color:#e1e4e8;">(venv) PS C:\\hyungsik74\\pycharm\\dstagram-project&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">(venv) PS C:\\hyungsik74\\pycharm\\dstagram-project&gt; django-admin startproject config .</span></span>
<span class="line"><span style="color:#24292e;">(venv) PS C:\\hyungsik74\\pycharm\\dstagram-project&gt; </span></span>
<span class="line"><span style="color:#24292e;">(venv) PS C:\\hyungsik74\\pycharm\\dstagram-project&gt; python manage.py migrate</span></span>
<span class="line"><span style="color:#24292e;">Operations to perform:</span></span>
<span class="line"><span style="color:#24292e;">  Apply all migrations: admin, auth, contenttypes, sessions</span></span>
<span class="line"><span style="color:#24292e;">Running migrations:                                        </span></span>
<span class="line"><span style="color:#24292e;">  Applying contenttypes.0001_initial... OK</span></span>
<span class="line"><span style="color:#24292e;">  Applying auth.0001_initial... OK        </span></span>
<span class="line"><span style="color:#24292e;">  Applying admin.0001_initial... OK</span></span>
<span class="line"><span style="color:#24292e;">  Applying admin.0002_logentry_remove_auto_add... OK</span></span>
<span class="line"><span style="color:#24292e;">  Applying admin.0003_logentry_add_action_flag_choices... OK</span></span>
<span class="line"><span style="color:#24292e;">  Applying contenttypes.0002_remove_content_type_name... OK</span></span>
<span class="line"><span style="color:#24292e;">  Applying auth.0002_alter_permission_name_max_length... OK</span></span>
<span class="line"><span style="color:#24292e;">  Applying auth.0003_alter_user_email_max_length... OK</span></span>
<span class="line"><span style="color:#24292e;">  Applying auth.0004_alter_user_username_opts... OK</span></span>
<span class="line"><span style="color:#24292e;">  Applying auth.0005_alter_user_last_login_null... OK</span></span>
<span class="line"><span style="color:#24292e;">  Applying auth.0006_require_contenttypes_0002... OK       </span></span>
<span class="line"><span style="color:#24292e;">  Applying auth.0007_alter_validators_add_error_messages... OK</span></span>
<span class="line"><span style="color:#24292e;">  Applying auth.0008_alter_user_username_max_length... OK</span></span>
<span class="line"><span style="color:#24292e;">  Applying auth.0009_alter_user_last_name_max_length... OK</span></span>
<span class="line"><span style="color:#24292e;">  Applying auth.0010_alter_group_name_max_length... OK</span></span>
<span class="line"><span style="color:#24292e;">  Applying auth.0011_update_proxy_permissions... OK</span></span>
<span class="line"><span style="color:#24292e;">  Applying auth.0012_alter_user_first_name_max_length... OK</span></span>
<span class="line"><span style="color:#24292e;">  Applying sessions.0001_initial... OK</span></span>
<span class="line"><span style="color:#24292e;">(venv) PS C:\\hyungsik74\\pycharm\\dstagram-project&gt;</span></span></code></pre></div><p><img src="`+g+'" alt="ch06-03-02_03.png"> 그림6-3-2 프로젝트 생성 후 폴더 구조 <br><img src="'+y+'" alt="ch06-03-02_04.png"> 그림6-3-2 관리자 아이디/암호 생성 <br><img src="'+h+'" alt="ch06-03-02_04.png"> 그림6-3-2 기본 프로젝트 생성 후 프로젝트 실행 확인 <br><img src="'+d+'" alt="ch06-03-02_04.png"> 그림6-3-2 사용자 페이지 접속 <code>http://localhost:8000/</code><br><img src="'+m+'" alt="ch06-03-02_04.png"> 그림6-3-2 관리자 페이지 접속 <code>http://localhost:8000/admin/</code></p><p><img src="'+_+'" alt="ch06-03-02_04.png"> 그림6-3-2 파이참 Run 버튼</p><p><img src="'+u+'" alt="ch06-03-02_04.png"> 그림6-3-2 파이참 Run 버튼</p><p><img src="'+v+'" alt="ch06-03-02_04.png"> 그림6-3-2 파이참 Run 설정</p><p><img src="'+f+'" alt="ch06-03-02_04.png"> 그림6-3-2 파이참 Run 메뉴</p><p><img src="'+b+'" alt="ch06-03-02_04.png"> 그림6-3-2 파이참 Run 실행</p>',28),O=[k];function A(K,x,w,C,S,P){return s(),a("div",null,O)}const U=n(j,[["render",A]]);export{B as __pageData,U as default};
