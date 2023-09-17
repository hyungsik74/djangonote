import{_ as e,o as a,c as t,Q as r}from"./chunks/framework.e39b7a49.js";const f=JSON.parse('{"title":"3.4 관리자 어플리케이션 작성","description":"","frontmatter":{},"headers":[],"relativePath":"ch03/ch03-04.md","filePath":"ch03/ch03-04.md"}'),c={name:"ch03/ch03-04.md"},o=r('<link rel="stylesheet" href="../css/style.css"><h1 id="_3-4-관리자-어플리케이션-작성" tabindex="-1">3.4 관리자 어플리케이션 작성 <a class="header-anchor" href="#_3-4-관리자-어플리케이션-작성" aria-label="Permalink to &quot;3.4 관리자 어플리케이션 작성&quot;">​</a></h1><p>이전 장에서는 분석/설계에 따라 사용자 어플리케이션의 URL, View, Template를 작성했습니다. 이번 장에서는 관리자 화면에서 질문리스트를 작성하는 방법을 보겠습니다. 질문 리스트 추가, 변경 및 삭제 할 수 있습니다.</p><p>웹 브라우저에서 관리자 페이지 주소로 접속합니다. <a href="http://127.0.0.1:8000/admin" target="_blank" rel="noreferrer">http://127.0.0.1:8000/admin</a></p><h2 id="_3-4-1-관리자-페이지" tabindex="-1">3.4.1 관리자 페이지 <a class="header-anchor" href="#_3-4-1-관리자-페이지" aria-label="Permalink to &quot;3.4.1 관리자 페이지&quot;">​</a></h2><p>관리자 로그인을 완료하면 다음과 같이 현재 생성되어 있는 데이터베이스 테이블 정보가 화면에 조회 됩니다.</p><ul><li>질문리스트 테이블 관리</li><li>질문의 선택항목 테이블 관리</li></ul><p>화면의 Question 과 Choice 부분의 +Add 버튼을 클릭하면 항목이 신규로 생성이 되며, Change 버튼은 변경을 할 수 있습니다.</p>',8),s=[o];function _(i,n,h,l,d,p){return a(),t("div",null,s)}const u=e(c,[["render",_]]);export{f as __pageData,u as default};