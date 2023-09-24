import{_ as t,o as i,c as s,Q as o}from"./chunks/framework.4976f53a.js";const e="/djangonote/assets/ch02-09-01_01.b9ce8bb3.png",a="/djangonote/assets/ch02-09-01_02.c63402e5.png",c="/djangonote/assets/ch02-09-01_03.569f3a65.png",p="/djangonote/assets/ch02-09-01_04.5f04a9f6.png",n="/djangonote/assets/ch02-09-01_05.871575fb.png",r="/djangonote/assets/ch02-09-01_06.57fed1bc.png",l="/djangonote/assets/ch02-09-01_07.9b3e9f6b.png",g="/djangonote/assets/ch02-09-01_08.03c3d307.png",_="/djangonote/assets/ch02-09-01_09.64c1a2f7.png",h="/djangonote/assets/ch02-09-01_10.8aac7a3b.png",m="/djangonote/assets/ch02-09-01_11.919ac6d2.png",d="/djangonote/assets/ch02-09-01_12.5857afb6.png",b="/djangonote/assets/ch02-09-01_13.e7d0d66e.png",u="/djangonote/assets/ch02-09-01_14.79ad25f2.png",G="/djangonote/assets/ch02-09-01_15.179fe569.png",A=JSON.parse('{"title":"2-9. Git(Github)","description":"","frontmatter":{},"headers":[],"relativePath":"ch02/ch02-09.md","filePath":"ch02/ch02-09.md"}'),f={name:"ch02/ch02-09.md"},k=o('<link rel="stylesheet" href="../css/style.css"><h1 id="_2-9-git-github" tabindex="-1">2-9. Git(Github) <a class="header-anchor" href="#_2-9-git-github" aria-label="Permalink to &quot;2-9. Git(Github)&quot;">​</a></h1><p>버전 관리 소프트웨어는 프로젝트의 상태를 스냅삿 처럼 기록하여, 특정 시점의 프로잭트 상태로 돌아 갈 수 있습니다.<br> 프로젝트를 변경할 때, 예를들어 새로운 기능을 구현할 때, 현재 프로젝트의 상태가 정상적으로 동작하지 않을때 이전의 상태로 돌아 갈 수 있습니다.</p><p>버전 관리 소프트웨어를 사용하면 프로젝트를 망칠 염려 없이 개선 작업을 수행하고 실수에서 자유로울 수 있습니다.<br> 이는 대규모 프로젝트에서 특히 중요하지만 한 파일에 포함된 프로그램으로 작업하는 경우에도 소규모 프로젝트에서도 도움이 될 수 있습니다. 이번장에서는 Git을 설치하고 현재 작업 중인 프로그램의 버전 제어에 Git을 사용하는 방법을 배웁니다.</p><p>Git은 오늘날 가장 널리 사용되는 버전 관리 소프트웨어입니다. 많은 향상된 도구는 많은 팀의 대규모 프로젝트에서 공동 작업하는 데 도움이 되고, 가장 기본적인 기능은 개인 개발자에게도 도움이 됩니다. Git은 프로젝트의 모든 파일에 대한 변경 사항을 추적하여 버전 제어를 구현합니다. 실수한 경우 이전에 저장된 상태로 돌아갈 수 있습니다.</p><div class="info custom-block"><p class="custom-block-title">Git에 대해서 상세한 정보는 아래의 사이트를 참고하세요.</p><p><a href="https://git-scm.com/book/ko/v2/" target="_blank" rel="noreferrer">https://git-scm.com/book/ko/v2/</a></p></div><h2 id="_2-9-1-git설치" tabindex="-1">2-9-1 Git설치 <a class="header-anchor" href="#_2-9-1-git설치" aria-label="Permalink to &quot;2-9-1 Git설치&quot;">​</a></h2><p>Git은 모든 시스템에서 동작하지만, 설치는 각각의 시스템에 다르게 설치됩니다. 아래의 장에서는 각각의 시스템에 설치할때 방법에 대해서 알아 보겠습니다.</p><h3 id="_2-9-1-git-원도우-설치" tabindex="-1">2-9-1 Git 원도우 설치 <a class="header-anchor" href="#_2-9-1-git-원도우-설치" aria-label="Permalink to &quot;2-9-1 Git 원도우 설치&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">Git 설치확인</p><p>명령프롬프트(Command Pormpt) 에서 확인 및 제어판 &gt; 프로그램 설치 목록 에서 확인 가능합니다. 예) git --version</p></div><p>Git을 설치하는 다양한 방법이 있습니다.</p><ul><li><p>공식 배포판은 Git 웹사이트에서 다운로드 한다.<br><a href="http://git-scm.com/" target="_blank" rel="noreferrer">http://git-scm.com/</a></p></li><li><p>&#39;GitHub Desktop’을 설치하는 방법<br><a href="https://desktop.github.com/" target="_blank" rel="noreferrer">https://desktop.github.com/</a></p></li></ul><p>여기서는 주로 원도우 환경 GUI를 지원하고, Github를 사용하기 때문에 GitHub Desktop를 설치 하도록 하겠습니다.</p><p><img src="'+e+'" alt="ch02-09-01_01.png"> 그림1. <a href="https://desktop.github.com" target="_blank" rel="noreferrer">https://desktop.github.com</a></p><ul><li>웹 브라우저로 해당 사이트에 접속한다.</li><li>Download for Windows(64bit) 를 클릭해서 다운로드 한다.</li><li>GitHubDesktopSetup-x64.exe 클릭해서 설치합니다.</li></ul><p><img src="'+a+'" alt="ch02-09-01_02.png"> 그림2. Github 로그인 및 설정</p><p><img src="'+c+'" alt="ch02-09-01_03.png"> 그림3. desktop github 실행화면</p><p><img src="'+p+'" alt="ch02-09-01_04.png"> 그림4. pycharm 화면 &gt; Git 설정</p><ul><li>pycharm 메뉴 File &gt; Settings 를 선택합니다.</li><li>Version Control &gt; Git 선택합니다.</li><li>Path to Git executable: 에서 위 에서 설치한 GitHubDesktop 의 git 실행 파일을 선택합니다.</li><li>Test 버튼을 클릭해서 정상적으로 동작하는지 확인 합니다.</li></ul><p><img src="'+n+'" alt="ch02-09-01_05.png"> 그림5. pycharm 화면 &gt; Github 설정</p><ul><li>pycharm 메뉴 File &gt; Settings 를 선택합니다.</li><li>Version Control &gt; Github를 선택합니다.</li><li>Github를 연결하기 위한 방법을 선택합니다.</li><li>여기서는 ID/PASSWORD 말고 토큰을 이용한 방법으로 연결 하겠습니다.</li><li>Add account 클릭 &gt; Log In to GitHub &gt; Token 을 선택합니다.</li><li>Add GitHub Account 창이 열리며, Generate.. 버튼을 클릭합니다.</li></ul><p><img src="'+r+'" alt="ch02-09-01_06.png"> 그림6. GitHub 로그인</p><p><img src="'+l+'" alt="ch02-09-01_07.png"> 그림7. GitHub 토큰 발급</p><p><img src="'+g+'" alt="ch02-09-01_08.png"> 그림8. GitHub 생성된 토큰</p><ul><li>GitHub에서 발급된 토큰입니다.</li><li>토큰을 복사해서 pycharm github 로그인 화면에 붙여넣기 합니다.</li></ul><p><img src="'+_+'" alt="ch02-09-01_09.png"> 그림9. pycharm GitHub 연결 완료 화면</p><p><img src="'+h+'" alt="ch02-09-01_10.png"> 그림10.</p><p><img src="'+m+'" alt="ch02-09-01_11.png"> 그림11.</p><p><img src="'+d+'" alt="ch02-09-01_12.png"> 그림12.</p><p><img src="'+b+'" alt="ch02-09-01_13.png"> 그림13.</p><p><img src="'+u+'" alt="ch02-09-01_14.png"> 그림14.</p><p><img src="'+G+'" alt="ch02-09-01_15.png"> 그림15.</p>',32),j=[k];function H(P,S,v,x,D,y){return i(),s("div",null,j)}const q=t(f,[["render",H]]);export{A as __pageData,q as default};