"use strict";(self.webpackChunktf_2_sr_wiki=self.webpackChunktf_2_sr_wiki||[]).push([[274],{1618:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>A,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var a=o(7462),i=(o(7294),o(3905));const n={},r="\ud83c\udf64 The shrimple way",s={unversionedId:"knowledge-base/contribute/easy-way",id:"knowledge-base/contribute/easy-way",title:"\ud83c\udf64 The shrimple way",description:"Regardless of which way you choose, there are two things you need to do first either way.",source:"@site/docs/knowledge-base/contribute/01-easy-way.md",sourceDirName:"knowledge-base/contribute",slug:"/knowledge-base/contribute/easy-way",permalink:"/TF2SR-Wiki/docs/knowledge-base/contribute/easy-way",draft:!1,editUrl:"https://github.com/TF2SR/TF2SR-Wiki/blob/main/docs/knowledge-base/contribute/01-easy-way.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"knowledgebaseSidebar",previous:{title:"\ud83c\udf3f Choose your own adventure",permalink:"/TF2SR-Wiki/docs/knowledge-base/contribute/intro"},next:{title:"\u2328 The hackerman way",permalink:"/TF2SR-Wiki/docs/knowledge-base/contribute/hard-way"}},l={},d=[{value:"Forking the repository",id:"forking-the-repository",level:2},{value:"Making your changes",id:"making-your-changes",level:2},{value:"Submitting your changes",id:"submitting-your-changes",level:2},{value:"Committing to your fork",id:"committing-to-your-fork",level:3},{value:"Creating a Pull Request",id:"creating-a-pull-request",level:3}],h={toc:d},u="wrapper";function A(e){let{components:t,...n}=e;return(0,i.mdx)(u,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"-the-shrimple-way"},"\ud83c\udf64 The shrimple way"),(0,i.mdx)("p",null,"Regardless of which way you choose, there are two things you need to do first either way."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Create a ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com"},"GitHub")," account"),(0,i.mdx)("li",{parentName:"ul"},"Fork the ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/TF2SR/TF2SR-Wiki"},"Wiki's GitHub repository"))),(0,i.mdx)("p",null,'Creating a GitHub account should be fairly straight forward, so I won\'t walk you through it here. The more pressing question is "wtf is that nonsense written in the second bullet point up there?"'),(0,i.mdx)("p",null,"The general workflow for making contributions on GitHub looks like this."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},'You create a copy of the original repository under your own account (This is called "forking" that repository)'),(0,i.mdx)("li",{parentName:"ul"},'You make changes to your own copy (This is your "fork")'),(0,i.mdx)("li",{parentName:"ul"},'You then push those changes back to original repository via something called a "Pull Request" (We\'ll talk more about what that means later)')),(0,i.mdx)("h2",{id:"forking-the-repository"},"Forking the repository"),(0,i.mdx)("p",null,"Creating your own fork of a repository on GitHub is actually very easy. On any repository in the top right there is a row of buttons, of which, you guessed it, you'll want to press the 'Fork' button."),(0,i.mdx)("p",null,(0,i.mdx)("img",{src:o(769).Z,width:"1393",height:"168"})),(0,i.mdx)("p",null,"This will take you to a new screen where you can change the name and description if you like. "),(0,i.mdx)("p",null,(0,i.mdx)("img",{src:o(3505).Z,width:"733",height:"561"})),(0,i.mdx)("p",null,"You'll probably want to leave the checkbox labeled 'Copy the ",(0,i.mdx)("inlineCode",{parentName:"p"},"main")," branch only' ticked, but you are doing no harm either way. Unticking it just means that you're also copying over any other branches we may have made that you probably don't need."),(0,i.mdx)("p",null,"Once you've hit that green button then badabing badaboom, you just forked the TF2SR Wiki, and you're ready to make some changes!"),(0,i.mdx)("h2",{id:"making-your-changes"},"Making your changes"),(0,i.mdx)("p",null,"I'm gonna show you a little magic trick. Click on the URL bar at the top of your browser. The URL should look something like ",(0,i.mdx)("inlineCode",{parentName:"p"},"https://github.com/<yourname>/TF2SR-Wiki")," Now, change the ",(0,i.mdx)("inlineCode",{parentName:"p"},".com")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},".dev")),(0,i.mdx)("p",null,(0,i.mdx)("img",{src:o(7500).Z,width:"349",height:"33"})," ",(0,i.mdx)("img",{src:o(7699).Z,width:"315",height:"37"})),(0,i.mdx)("p",null,"This will open up a fancy text editor, letting you make your changes directly in the browser. All the markdown files that contain the text within the wiki are located in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"docs")," directory."),(0,i.mdx)("admonition",{title:"side note",type:"info"},(0,i.mdx)("p",{parentName:"admonition"},"Chances are that files that end with ",(0,i.mdx)("inlineCode",{parentName:"p"},".mdx")," won't get any nice color highlighting. You can fix this by opening a file that ends with ",(0,i.mdx)("inlineCode",{parentName:"p"},".mdx"),", look in the bottom right where you'll likely find \"Plain Text\" and click on it. This'll open up a command palette at the top where you can change what language the editor should treat this file as.\n",(0,i.mdx)("img",{src:o(3482).Z,width:"955",height:"595"})),(0,i.mdx)("p",{parentName:"admonition"},'Choose "Configure File Association for \'.mdx\'..." and then type in and choose "Markdown".\n',(0,i.mdx)("img",{src:o(4633).Z,width:"619",height:"129"})),(0,i.mdx)("p",{parentName:"admonition"},"You may need to close and reopen the file to see any change.")),(0,i.mdx)("p",null,"As you're making changes, you'll notice a number appear next to this weird little icon in the left hand side bar. This is the source control tab and lets you use Git directly from within the text editor."),(0,i.mdx)("p",null,(0,i.mdx)("img",{src:o(8821).Z,width:"49",height:"49"})),(0,i.mdx)("p",null,"Clicking on it will change the file browser to show only the files that you have made changes to. You can even click on any file to see a visualization of exactly what you've changed in the file."),(0,i.mdx)("p",null,(0,i.mdx)("img",{src:o(795).Z,width:"1552",height:"334"})),(0,i.mdx)("admonition",{title:"side note",type:"note"},(0,i.mdx)("p",{parentName:"admonition"},'If you want to, you can split your changes into multiple different commits by clicking on the little "+" next to the file name in the list. This will add that file to the "staging area", where the next time you click on the big commit button, it will only commit those files you\'ve chosen and leave all the other files alone.'),(0,i.mdx)("p",{parentName:"admonition"},"This is not necessary, but can be useful if you're working on multiple things simultaneously and want to keep your commit history neatly organized.")),(0,i.mdx)("h2",{id:"submitting-your-changes"},"Submitting your changes"),(0,i.mdx)("p",null,"Submitting your changes is a two-step process."),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},'Save and record the changes you\'ve made to your own repository (in programmer jargon, "commit" the changes to your "fork").'),(0,i.mdx)("li",{parentName:"ol"},'Create a "Pull Request" from your repository onto the original repository.')),(0,i.mdx)("h3",{id:"committing-to-your-fork"},"Committing to your fork"),(0,i.mdx)("p",null,'In order to record the changes in your own repository, all you need to do is press the big green "Commit & Push"',(0,i.mdx)("sup",{parentName:"p",id:"fnref-1"},(0,i.mdx)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," button. You can also add a message to your commit, where you can describe the changes you've made."),(0,i.mdx)("p",null,(0,i.mdx)("img",{src:o(1591).Z,width:"1278",height:"410"})),(0,i.mdx)("p",null,"Once you've done that, you can double check that it actually went through by going to ",(0,i.mdx)("inlineCode",{parentName:"p"},"github.com/<yourname>/TF2SR-Wiki/commits/main"),", which will show you a history of every commit ever made to the repository, including the ones that were made on the main repository before you created your fork."),(0,i.mdx)("h3",{id:"creating-a-pull-request"},"Creating a Pull Request"),(0,i.mdx)("p",null,"Home stretch! This is the final step in the process. The pull request is now the formal step where you make a ",(0,i.mdx)("strong",{parentName:"p"},"request")," to the maintainer of the main repository to ",(0,i.mdx)("strong",{parentName:"p"},"pull")," the changes you've made on your fork onto the main repository."),(0,i.mdx)("p",null,"To open a pull request, go to the main page of your repository (",(0,i.mdx)("inlineCode",{parentName:"p"},"github.com/<yourname>/TF2SR-Wiki"),') and check to see if this bar shows up that reads "This branch is ',(0,i.mdx)("inlineCode",{parentName:"p"},"xyz")," commit(s) ahead of TF2SR:main\". If you don't see this, that means that you haven't made a commit to your own repository yet."),(0,i.mdx)("p",null,'Click on the dropdown labeled "Contribute" and then on "Open pull request".'),(0,i.mdx)("p",null,(0,i.mdx)("img",{src:o(6615).Z,width:"1252",height:"418"})),(0,i.mdx)("p",null,"This will take you to the final page, where you can edit the title of the pull request or add extra comments if you'd like. Then all that's left is to click the big green button labeled \"Create pull request\""),(0,i.mdx)("p",null,"The main repository will do some automatic checks to see if the site will compile properly. If any checks fail, that's usually a skill issue on my end, so you don't need to worry that you actually broke something."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Congratulations!"),' You just submitted your changes to the wiki! Now you can sit back, scroll back to the top and wonder how I can justify calling this the "shrimple way" when there is so much goddamn text like what the hell i just want to edit some text on a goddamn wiki'),(0,i.mdx)("div",{className:"footnotes"},(0,i.mdx)("hr",{parentName:"div"}),(0,i.mdx)("ol",{parentName:"div"},(0,i.mdx)("li",{parentName:"ol",id:"fn-1"},"The reason it's labeled as doing 2 things is because Git usually gives you a lot of optional intermediary steps before you actually record your changes to your repository. It usually goes from your local changes -> Staging area -> Commit -> Push. For our purposes though, we don't need 15 billion different steps to double check that our changes didn't break anything.",(0,i.mdx)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}A.isMDXComponent=!0},7500:(e,t,o)=>{o.d(t,{Z:()=>a});const a="data:image/jpeg;base64,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"},1591:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/ghcommithist-7449d2f5ad03a97db204016d3dd56fdf.jpg"},3505:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/ghconfirmfork-5e62b36311c1d6821e75001e65ce4f50.jpg"},7699:(e,t,o)=>{o.d(t,{Z:()=>a});const a="data:image/jpeg;base64,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"},769:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/ghfork-890202a8f5beb76297d9abfc1bf0e48d.jpg"},6615:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/ghopenpr-49b4352b70c7812b71925e0050e07714.jpg"},3482:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/mdxlang1-fc4964a733b00558f3b56be2419d9141.jpg"},4633:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/mdxlang2-096e5a17b226dfb44c988a1243ee0063.jpg"},8821:(e,t,o)=>{o.d(t,{Z:()=>a});const a="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAxADEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD81KKKvaJpUmu61YabCypNeTx26M/3QzMFBPtzXYk5OyMW7K7KNFeo6z8P/Cc9p4ktNBvtXOteHonmuW1COMW9ysbiOTywvzIcnIDE5HFebQWFzdQzTQ2800UIzLJGhZUHqxHT8akZXq7ov/IYsP8ArvH/AOhCqVXdF/5DFh/13j/9CFMRyVFFFQM6CnwzPbypLG7RyIwZXU4Kkcgg+tMq7oukz69rFjpttt+0Xk6W8e84G52CjJ9MmtI3bSW4na2p6d8RPGmq3vw48LyvJBHPr0U8mqTwW0cUl4YpysfmOqgtgAd+eprrPhv/AGtrXhjwpP4W8QR6LpuiuRrVk29TLI0hYsVVSJ98fAXnGMU6TxDBofgy60DwfqEcmveEI5nur6+0qJvtEXnfvRAzl9oVn5BUFsDB4r2HwvYy6pLpljquqwW0jhY57+aEiNWxyxSFD1PZV9PrX1mQZL/bNap7/LCGrdr73skuuz+4+fzbMlltKLcbuV1b7r+nT7z4z8c24h8WarJFp0+l2c11LLbW1xCYmSIuSo2npgYrO0X/AJDFh/13j/8AQhX2j8aPhjZyX/iLwrcut6+n3U1tBeGPY3mIxVZAMnbnHIyeDjmvi7Rf+QxYf9d4/wD0IVjnmR/2NKnyT56c1eLtZ6W3XzRvl2Zf2gqinHlnB2a3X9aM5KiiivlT2joKltbqWxuobi3kaGeFxJHIhwVYHII9waioq9tUI7vxD8YdW8QaXe2Z07SNOl1DH2++0+zEVxeAEHEjZPBYAnaBk1698NfjVpGpaXaRareQ6dqlsFVzcttjl29HDHjnHIJHNfM1Fe/k+dYjJa0qtBJqWjT2fb0t0PKzDLaOZUlTq6W2a/rqfVHxq/aE0/UrrW9Rs7q1vdc1aaWYrYEmCFpCSzbsngZOBknpn1r5k0X/AJDFh/13j/8AQhVKrui/8hiw/wCu8f8A6EKnNs4r5vUjKqlGMVaKWyRWBwFPAxkoNtyd23uzkqKKK+fPUOgoooqwCiiigAq7ov8AyGLD/rvH/wChCiigRyVFFFQM/9k="},795:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/vscsourcecontrol-ceee12333f7fac94d2a0c3d939fdda8d.jpg"}}]);