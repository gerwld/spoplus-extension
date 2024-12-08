//   - This file is part of SpoPlus Extension
//  <https://github.com/gerwld/SpoPlus-extension/blob/main/README.md>,
//   - Copyright (C) 2023-present SpoPlus Extension
//   -
//   - SpoPlus Extension is a software: you can redistribute it, but you are not allowed to modify it under the terms of the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) License.
//   -
//   - SpoPlus Extension is distributed in the hope that it will be useful,
//   - but WITHOUT ANY WARRANTY; without even the implied warranty of
//   - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//   - Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) License for more details.
//   -
//   - You should have received a copy of the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) License
//   - along with SpoPlus Extension.  If not, see <https://creativecommons.org/licenses/by-nc-nd/4.0/>.


// Note: Spotify is a registered trademark of Spotify AB. This extension is not affiliated with or endorsed by Spotify AB.
(()=>{"use strict";{let n,t,o;const p=chrome||browser,l=["roboto","poppins","caprasimo","playfair","merriweather","noto_sans","nunito","montserrat","pixelify","gabarito","roboto_condensed","inter"],d=["light_green","light_pink","light_pink_dd","kimbie_dark","red","solarized_dark","quiet_light","dottie","purple_dark","dark_pink","light_purple","dark_red","dark_yellow","dark_blue","amoled","amoled_night"];function a(e,n,a){fetch(p.runtime.getURL(e)).then(e=>e.text()).then(e=>{var t=document.getElementById(a),o=document.createElement("style");o.textContent=e,o.setAttribute("id",a),n&&!t?document.head.appendChild(o):!n&&t instanceof Node&&document.head.removeChild(t)}).catch(e=>{})}function r(e,o,t){a(e,o,"now_play_disable"),o?n=setInterval(function(){t.forEach(e=>{var t=localStorage.getItem(e);o&&0!=t&&localStorage.setItem(e,0)})},700):clearInterval(n)}function i(e,o){a(e,o,"static_aside"),o?t=setInterval(function(){var e,t;o&&(e=localStorage.getItem("182yfcl2wcrumva06hlhooydu:ylx-default-state-nav-bar-width"),t=localStorage.getItem("182yfcl2wcrumva06hlhooydu:ylx-sidebar-state"),400!==e&&localStorage.setItem("182yfcl2wcrumva06hlhooydu:ylx-default-state-nav-bar-width",400),1==t)&&(localStorage.setItem("182yfcl2wcrumva06hlhooydu:ylx-sidebar-state",0),window.location.reload())},700):clearInterval(t)}function s(e,t){a(e,t,"focus_mode"),t?o=setInterval(function(){t&&(1==localStorage.getItem("182yfcl2wcrumva06hlhooydu:ylx-sidebar-state")&&localStorage.setItem("182yfcl2wcrumva06hlhooydu:ylx-sidebar-state",0),localStorage.setItem("182yfcl2wcrumva06hlhooydu:items-view",0))},200):clearInterval(o)}function e(){p.storage.local.get("formState",e=>{var t,o,e=e.formState.disabled?{disabled:!0}:e.formState;a("/assets/graphs/header_btns.css",e.header_btns,"header_btns"),a("/assets/graphs/rect_avatars.css",e.rect_avatars,"rect_avatars"),a("/assets/graphs/block_images.css",e.block_images,"block_images"),a("/assets/graphs/block_videos.css",e.block_videos,"block_videos"),a("/assets/graphs/bigger_navbar.css",e.bigger_navbar,"bigger_navbar"),a("/assets/graphs/heart_icons.css",e.heart_icons,"heart_icons"),r("/assets/graphs/now_play_disable.css",e.now_play_disable,["182yfcl2wcrumva06hlhooydu:ui-panel-state","182yfcl2wcrumva06hlhooydu:ylx-sidebar-state"]),i("/assets/graphs/static_aside.css",e.static_aside),s("/assets/graphs/focus_mode.css",e.focus_mode),a("/assets/graphs/square_shaped.css",e.square_shaped,"square_shaped"),a("/assets/graphs/reduce_lowend.css",e.reduce_lowend,"reduce_lowend"),t=e.theme,-1!==d.indexOf(t)&&a(`/assets/graphs/themes/${t}.css`,!0,t),d.filter(e=>e!==t).forEach(e=>document.getElementById(e)?.remove()),o=e.font,-1!==l.indexOf(o)&&a(`/assets/graphs/fonts/${o}.css`,!0,o),l.filter(e=>e!==o).forEach(e=>document.getElementById(e)?.remove())})}p.storage.onChanged.addListener(function(){e()}),document.addEventListener("DOMContentLoaded",e,!1)}})(),(()=>{"use strict";{const t=["en","de","es","pl","uk","sv","ar","be","ru","fr","hi","ja","nl","zh","pt"];let r;const i={en:{title:"Your support inspires us to create more!",subtitle_1:"Thank you for using SpoPlus! We (me and my close friend) have put in a lot of time and effort to make your Spotify experience enjoyable and personalized. If you appreciate what we do, support the project with a small donation. It helps us add new features and keep the extension free for everyone.",title_2:"Why does it matter?",subtitle_2:"Your donation allows us to improve themes, add more fonts and modes, and keep SpoPlus running smoothly.",title_3:"Bonuses for you:",pref_1:"Unique donor badge (in the extension).",pref_2:"Priority access to new features.",pref_3:"The ability to vote for future updates.",don_1:"Donate $10 (Big Support)",don_2:"Donate $5 (Cup of Coffee)",don_3:"Donate your amount (From $0.1)",sup:"Every heart we bring back to Spotify is thanks to people like you!",rem_btn:"Remind me later",more_btn:"More about the project"},de:{title:"Ihre Unterstützung inspiriert uns, mehr zu schaffen!",subtitle_1:"Vielen Dank, dass Sie SpoPlus verwenden! Wir (ich und mein enger Freund) haben viel Zeit und Mühe investiert, um Ihr Spotify-Erlebnis angenehm und personalisiert zu gestalten. Wenn Sie schätzen, was wir tun, unterstützen Sie das Projekt mit einer kleinen Spende. Das hilft uns, neue Funktionen hinzuzufügen und die Erweiterung für alle kostenlos zu halten.",title_2:"Warum ist das wichtig?",subtitle_2:"Ihre Spende ermöglicht es uns, Themen zu verbessern, mehr Schriftarten und Modi hinzuzufügen und SpoPlus stabil zu halten.",title_3:"Boni für Sie:",pref_1:"Einzigartiges Spenderabzeichen (in der Erweiterung).",pref_2:"Prioritärer Zugriff auf neue Funktionen.",pref_3:"Die Möglichkeit, über zukünftige Updates abzustimmen.",don_1:"Spenden 10€ (Große Unterstützung)",don_2:"Spenden 5€ (Tasse Kaffee)",don_3:"Spenden Sie Ihren Betrag (Ab 0.1€)",sup:"Jedes Herz, das wir zu Spotify zurückbringen, verdanken wir Menschen wie Ihnen!",rem_btn:"Später erinnern",more_btn:"Mehr über das Projekt"},es:{title:"¡Tu apoyo nos inspira a crear más!",subtitle_1:"¡Gracias por usar SpoPlus! Nosotros (yo y mi amigo cercano) hemos dedicado mucho tiempo y esfuerzo para que tu experiencia en Spotify sea agradable y personalizada. Si valoras lo que hacemos, apoya el proyecto con una pequeña donación. Esto nos ayuda a añadir nuevas funciones y mantener la extensión gratuita para todos.",title_2:"¿Por qué es importante?",subtitle_2:"Tu donación nos permite mejorar los temas, añadir más fuentes y modos, y mantener SpoPlus funcionando sin problemas.",title_3:"Bonificaciones para ti:",pref_1:"Insignia de donante única (en la extensión).",pref_2:"Acceso prioritario a nuevas funciones.",pref_3:"La posibilidad de votar por futuras actualizaciones.",don_1:"Donar $10 (Gran Apoyo)",don_2:"Donar $5 (Taza de Café)",don_3:"Dona tu cantidad (Desde $0.1)",sup:"¡Cada corazón que devolvemos a Spotify es gracias a personas como tú!",rem_btn:"Recordar más tarde",more_btn:"Más sobre el proyecto"},pl:{title:"Twoje wsparcie inspiruje nas do tworzenia więcej!",subtitle_1:"Dziękujemy za korzystanie z SpoPlus! My (ja i mój bliski przyjaciel) włożyliśmy wiele czasu i wysiłku, aby uczynić Twoje doświadczenie ze Spotify przyjemnym i spersonalizowanym. Jeśli doceniasz to, co robimy, wesprzyj projekt drobną darowizną. To pomoże nam dodawać nowe funkcje i utrzymać rozszerzenie bezpłatnym dla wszystkich.",title_2:"Dlaczego to ważne?",subtitle_2:"Twoja darowizna pozwala nam ulepszać motywy, dodawać więcej czcionek i trybów oraz utrzymywać SpoPlus w stabilnym działaniu.",title_3:"Bonusy dla Ciebie:",pref_1:"Unikalna odznaka darczyńcy (w rozszerzeniu).",pref_2:"Priorytetowy dostęp do nowych funkcji.",pref_3:"Możliwość głosowania na przyszłe aktualizacje.",don_1:"Przekaż 30zł (Duże wsparcie)",don_2:"Przekaż 5zł (Kubek kawy)",don_3:"Przekaż swoją kwotę (Od 0.1zł)",sup:"Każde serce, które przywracamy do Spotify, to zasługa takich osób jak Ty!",rem_btn:"Przypomnij później",more_btn:"Więcej o projekcie"},uk:{title:"Ваша підтримка надихає нас творити більше!",subtitle_1:"Дякуємо за використання SpoPlus! Ми (я і мій близький друг) доклали багато часу та зусиль, щоб зробити ваш досвід зі Spotify приємним і персоналізованим. Якщо ви цінуєте те, що ми робимо, підтримайте проєкт невеликою пожертвою. Це допоможе нам додавати нові функції та зберігати розширення безкоштовним для всіх.",title_2:"Чому це важливо?",subtitle_2:"Ваша пожертва дозволяє нам покращувати теми, додавати більше шрифтів і режимів, а також підтримувати стабільну роботу SpoPlus.",title_3:"Бонуси для вас:",pref_1:"Унікальний значок донора (в розширенні).",pref_2:"Пріоритетний доступ до нових функцій.",pref_3:"Можливість голосувати за майбутні оновлення.",don_1:"Пожертвувати 100грн (Велика підтримка)",don_2:"Пожертвувати 25грн (Чашка кави)",don_3:"Пожертвувати свою суму (Від 1грн)",sup:"Кожне серце, яке ми повертаємо в Spotify, — це заслуга таких людей, як ви!",rem_btn:"Нагадати пізніше",more_btn:"Детальніше про проєкт"},ru:{title:"Ваша поддержка вдохновляет нас творить больше!",subtitle_1:"Спасибо, что используете SpoPlus! Мы (я и мой близкий друг) вложили много времени и усилий, чтобы сделать ваше взаимодействие со Spotify приятным и персонализированным. Если вы цените то, что мы делаем, поддержите проект небольшим донатом. Это поможет нам добавлять новые функции и поддерживать расширение бесплатным для всех.",title_2:"Почему это важно?",subtitle_2:"Ваш донат позволяет нам улучшать темы, добавлять больше шрифтов и режимов, а также поддерживать стабильную работу SpoPlus.",title_3:"Бонусы для вас:",pref_1:"Уникальный значок донора (в расширении).",pref_2:"Приоритетный доступ к новым функциям.",pref_3:"Возможность голосовать за будущие обновления.",don_1:"Пожертвовать $10 (Большая поддержка)",don_2:"Пожертвовать $5 (Чашка кофе)",don_3:"Пожертвовать свою сумму (От $0.1)",sup:"Каждое сердечко, которое мы возвращаем в Spotify, — это заслуга таких людей, как вы!",rem_btn:"Напомнить позже",more_btn:"Подробнее о проекте"},sv:{title:"Ditt stöd inspirerar oss att skapa mer!",subtitle_1:"Tack för att du använder SpoPlus! Vi (jag och min nära vän) har lagt ner mycket tid och ansträngning för att göra din Spotify-upplevelse trevlig och personlig. Om du uppskattar det vi gör, stöd projektet med en liten donation. Det hjälper oss att lägga till nya funktioner och hålla tillägget gratis för alla.",title_2:"Varför är det viktigt?",subtitle_2:"Din donation gör att vi kan förbättra teman, lägga till fler typsnitt och lägen samt hålla SpoPlus stabilt.",title_3:"Bonusar för dig:",pref_1:"Unikt donatormärke (i tillägget).",pref_2:"Prioriterad tillgång till nya funktioner.",pref_3:"Möjlighet att rösta om framtida uppdateringar.",don_1:"Donera 10€ (Stort stöd)",don_2:"Donera 5€ (Kopp kaffe)",don_3:"Donera ditt belopp (Från 0.1€)",sup:"Varje hjärta vi återför till Spotify är tack vare människor som dig!",rem_btn:"Påminn mig senare",more_btn:"Mer om projektet"},ar:{title:"دعمك يلهمنا للإبداع أكثر!",subtitle_1:"شكرًا لاستخدامك SpoPlus! نحن (أنا وصديقي المقرب) بذلنا الكثير من الوقت والجهد لجعل تجربتك مع Spotify ممتعة ومخصصة. إذا كنت تقدر ما نقوم به، ادعم المشروع بتبرع صغير. يساعدنا ذلك على إضافة ميزات جديدة والحفاظ على الامتداد مجانيًا للجميع.",title_2:"لماذا هذا مهم؟",subtitle_2:"تبرعك يتيح لنا تحسين الثيمات، إضافة المزيد من الخطوط والأوضاع، والحفاظ على SpoPlus يعمل بسلاسة.",title_3:"المكافآت لك:",pref_1:"شارة مانح فريدة (في الإضافة).",pref_2:"أولوية الوصول إلى الميزات الجديدة.",pref_3:"إمكانية التصويت على التحديثات المستقبلية.",don_1:"تبرع بـ $10 (دعم كبير)",don_2:"تبرع بـ $5 (فنجان قهوة)",don_3:"تبرع بمبلغك (من $0.1)",sup:"كل قلب نعيده إلى Spotify هو بفضل أشخاص مثلك!",rem_btn:"ذكرني لاحقًا",more_btn:"المزيد عن المشروع"},be:{title:"Ваша падтрымка натхняе нас ствараць больш!",subtitle_1:"Дзякуй, што карыстаецеся SpoPlus! Мы (я і мой блізкі сябар) уклалі шмат часу і намаганняў, каб зрабіць ваш досвед са Spotify прыемным і персаналізаваным. Калі вы цэніце тое, што мы робім, падтрымайце праект невялікім ахвяраваннем. Гэта дапаможа нам дадаваць новыя функцыі і падтрымліваць пашырэнне бясплатным для ўсіх.",title_2:"Чаму гэта важна?",subtitle_2:"Ваш унёсак дазваляе нам удасканальваць тэмы, дадаваць больш шрыфтоў і рэжымаў, а таксама падтрымліваць стабільную працу SpoPlus.",title_3:"Бонусы для вас:",pref_1:"Унікальны значок донара (у пашырэнні).",pref_2:"Прыярытэтны доступ да новых функцый.",pref_3:"Магчымасць галасаваць за будучыя абнаўленні.",don_1:"Ахвяраваць $10 (Вялікая падтрымка)",don_2:"Ахвяраваць $5 (Кубак кавы)",don_3:"Ахвяраваць сваю суму (Ад $0.1)",sup:"Кожнае сэрца, якое мы вяртаем у Spotify, — гэта заслуга такіх людзей, як вы!",rem_btn:"Нагадаць пазней",more_btn:"Даведацца больш пра праект"},fr:{title:"Votre soutien nous inspire à créer davantage !",subtitle_1:"Merci d'utiliser SpoPlus ! Nous (moi et mon ami proche) avons investi beaucoup de temps et d'efforts pour rendre votre expérience Spotify agréable et personnalisée. Si vous appréciez ce que nous faisons, soutenez le projet avec un petit don. Cela nous aide à ajouter de nouvelles fonctionnalités et à maintenir l'extension gratuite pour tout le monde.",title_2:"Pourquoi est-ce important ?",subtitle_2:"Votre don nous permet d'améliorer les thèmes, d'ajouter plus de polices et de modes, et de maintenir SpoPlus opérationnel.",title_3:"Bonus pour vous :",pref_1:"Badge de donateur unique (dans l'extension).",pref_2:"Accès prioritaire aux nouvelles fonctionnalités.",pref_3:"Possibilité de voter pour les futures mises à jour.",don_1:"Faire un don de 10 € (Grand soutien)",don_2:"Faire un don de 5 € (Tasse de café)",don_3:"Faire un don d'un montant (à partir de 0,1 €)",sup:"Chaque cœur que nous ramenons sur Spotify est grâce à des personnes comme vous !",rem_btn:"Me rappeler plus tard",more_btn:"En savoir plus sur le projet"},hi:{title:"आपका समर्थन हमें और अधिक बनाने के लिए प्रेरित करता है!",subtitle_1:"SpoPlus का उपयोग करने के लिए धन्यवाद! हमने (मैं और मेरे करीबी दोस्त) ने आपका Spotify अनुभव सुखद और व्यक्तिगत बनाने के लिए बहुत समय और मेहनत लगाई है। यदि आप हमारे कार्य की सराहना करते हैं, तो एक छोटी सी डोनेशन के साथ परियोजना का समर्थन करें। यह हमें नई सुविधाएँ जोड़ने और एक्सटेंशन को सभी के लिए मुफ्त रखने में मदद करता है।",title_2:"यह क्यों मायने रखता है?",subtitle_2:"आपका दान हमें थीम्स सुधारने, अधिक फोंट और मोड्स जोड़ने और SpoPlus को सुचारू रूप से चलाने में सक्षम बनाता है।",title_3:"आपके लिए बोनस:",pref_1:"विशिष्ट दाता बैज (एक्सटेंशन में)।",pref_2:"नई सुविधाओं तक प्राथमिकता पहुंच।",pref_3:"भविष्य के अपडेट के लिए वोट करने की सुविधा।",don_1:"₹400 का दान करें (बड़ा समर्थन)",don_2:"₹150 का दान करें (कॉफी का कप)",don_3:"अपनी राशि दान करें (कम से कम ₹1 से)",sup:"Spotify में हम जो भी दिल वापस लाते हैं, वह आप जैसे लोगों की वजह से है!",rem_btn:"मुझे बाद में याद दिलाएं",more_btn:"परियोजना के बारे में अधिक जानकारी"},nl:{title:"Jouw steun inspireert ons om meer te creëren!",subtitle_1:"Bedankt voor het gebruik van SpoPlus! Wij (ik en mijn goede vriend) hebben veel tijd en moeite gestoken in het leuker en persoonlijker maken van jouw Spotify-ervaring. Als je waardeert wat we doen, steun dan het project met een kleine donatie. Het helpt ons om nieuwe functies toe te voegen en de extensie gratis te houden voor iedereen.",title_2:"Waarom is het belangrijk?",subtitle_2:"Jouw donatie stelt ons in staat om thema's te verbeteren, meer lettertypen en modi toe te voegen en SpoPlus soepel te laten draaien.",title_3:"Bonussen voor jou:",pref_1:"Uniek donorbadge (in de extensie).",pref_2:"Prioritaire toegang tot nieuwe functies.",pref_3:"De mogelijkheid om te stemmen voor toekomstige updates.",don_1:"Doneer €10 (Grote steun)",don_2:"Doneer €5 (Kopje koffie)",don_3:"Doneer jouw bedrag (Vanaf €0,1)",sup:"Elke hart die we terugbrengen naar Spotify is dankzij mensen zoals jij!",rem_btn:"Herinner me later",more_btn:"Meer over het project"},zh:{title:"您的支持激励我们创造更多！",subtitle_1:"感谢您使用 SpoPlus！我和我的好友花费了大量时间和精力，为您提供愉快且个性化的 Spotify 体验。如果您欣赏我们的工作，请通过小额捐款支持这个项目。您的支持将帮助我们添加新功能，并确保扩展对所有人免费。",title_2:"为什么重要？",subtitle_2:"您的捐赠可以帮助我们改进主题、增加更多字体和模式，并确保 SpoPlus 顺畅运行。",title_3:"您将获得的奖励：",pref_1:"独特的捐赠者徽章（在扩展中显示）。",pref_2:"优先使用新功能。",pref_3:"有权投票决定未来的更新。",don_1:"捐赠 ¥40（大力支持）",don_2:"捐赠 ¥20（一杯咖啡）",don_3:"捐赠任意金额（从 $0.1 开始）",sup:"每个回归 Spotify 的心都要感谢像您这样的人！",rem_btn:"稍后提醒我",more_btn:"了解更多关于项目的信息"},pt:{title:"Seu apoio nos inspira a criar mais!",subtitle_1:"Obrigado por usar o SpoPlus! Nós (eu e meu amigo próximo) dedicamos muito tempo e esforço para tornar sua experiência no Spotify agradável e personalizada. Se você aprecia o que fazemos, apoie o projeto com uma pequena doação. Isso nos ajuda a adicionar novos recursos e manter a extensão gratuita para todos.",title_2:"Por que isso é importante?",subtitle_2:"Sua doação nos permite melhorar temas, adicionar mais fontes e modos, e manter o SpoPlus funcionando sem problemas.",title_3:"Bônus para você:",pref_1:"Distintivo exclusivo de doador (na extensão).",pref_2:"Acesso prioritário a novos recursos.",pref_3:"A capacidade de votar nas futuras atualizações.",don_1:"Doe $10 (Grande Apoio)",don_2:"Doe $5 (Um Café)",don_3:"Doe qualquer quantia (A partir de $0,1)",sup:"Cada coração que trazemos de volta ao Spotify é graças a pessoas como você!",rem_btn:"Lembre-me mais tarde",more_btn:"Mais sobre o projeto"},ja:{title:"あなたのサポートが私たちの創作意欲を高めます！",subtitle_1:"SpoPlusをご利用いただきありがとうございます！私たち（私と親しい友人）は、Spotifyの体験を楽しくパーソナライズされたものにするために多くの時間と努力を費やしました。私たちの活動を気に入っていただけたら、小さな寄付でプロジェクトをサポートしてください。新しい機能を追加し、この拡張機能をすべての人に無料で提供し続ける助けになります。",title_2:"なぜ重要なのですか？",subtitle_2:"あなたの寄付により、テーマの改善、フォントやモードの追加、SpoPlusの円滑な運営が可能になります。",title_3:"あなたへの特典:",pref_1:"ユニークなドナーバッジ（拡張機能内）。",pref_2:"新機能への優先アクセス。",pref_3:"今後のアップデートへの投票権。",don_1:"10ドルを寄付（大きなサポート）",don_2:"5ドルを寄付（一杯のコーヒー）",don_3:"お好きな金額を寄付（0.1ドルから）",sup:"Spotifyにハートを取り戻すのは、あなたのような人々のおかげです！",rem_btn:"あとでリマインドする",more_btn:"プロジェクトについてもっと知る"}},s=chrome||browser;var e;r=(e=navigator?.language?.split("-")[0]?.toLowerCase()||"en",-1!==t.indexOf(e)?e:"en"),document.addEventListener("DOMContentLoaded",()=>{s?.storage?.local&&s.storage.local.get("closeDonateCount",function(a){a.closeDonateCount||s.storage.local.set({closeDonateCount:0}),(!a.closeDonateCount||a.closeDonateCount<3)&&s.storage.local.get("formState",t=>{const e=3456e5;if(!t?.formState?.disabled&&(!(null!=(o=t?.formState?.timestamp)&&!isNaN(o))||o+e<Date.now())){const n=document.createElement("div");n.setAttribute("id","ext_show_dn");var o=s.runtime.getURL("assets/img/frog.gif");n.innerHTML=`
            
  <div id="donation-popup">
  <div class="spp__popup-container">
    <div class="img">
      <img src="${o}" alt="Donate">
    </div>
    <div class="prev"></div>
    <h2>${i[r].title}</h2>
    <p>${i[r].subtitle_1}</p>

    <h3>${i[r].title_2}</h3>
    <p>${i[r].subtitle_2}</p>

    <h3>${i[r].title_3}</h3>
    <ul>
      <li>💖 ${i[r].pref_1}</li>
      <li>🌟 ${i[r].pref_2}</li>
      <li>🎨 ${i[r].pref_3}</li>
    </ul>

    <div class="donate-as">
      <a href="https://www.paypal.com/donate/?cmd=_donations&business=pjaworski.dev@gmail.com" target="_blank" class="donate-btn" onclick="donate(10)">${i[r].don_1}</a>
      <a href="https://ko-fi.com/patrykjaworski" target="_blank" class="donate-btn" onclick="donate(5)">${i[r].don_2}</a>
      <a href="https://www.paypal.com/donate/?cmd=_donations&business=pjaworski.dev@gmail.com" target="_blank" class="donate-btn" onclick="donate('custom')">${i[r].don_3}</a>
    </div>

    <p class="spp__sup"><strong>${i[r].sup} ❤️</strong></p>

    <div class="close-popup">
      <a class="closeNotification">${i[r].rem_btn}</a>
      <a href="https://github.com/gerwld/spoplus-extension/blob/main/README.md" target="_blank">${i[r].more_btn}</a>
    </div>
  </div>
  
  <button class="close_btn closeNotification">X</button>
</div>



<style id="43ggfdbt5rf">

  #donation-popup {
    position: absolute;
    top: 10px;
    right: 10px;
    max-width: 480px;
    max-height: 100vh;
    max-height: calc(100vh - 82px);
    min-height: 350px;
    overflow: scroll;
    background-color: #1f1f20 !important;
    border: 1px solid rgb(68, 86, 91, 0.5);
    box-shadow: rgba(0, 0, 0, 0.8) 0px 8px 24px;
    border-radius: 15px;
  }
  .spp__popup-container {
    position: relative;
    overflow: hidden;
  }

  .spp__popup-container .img {
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 155px;
    height: 155px;
    opacity: 0.7;
    margin: -5px -12px -8px -14px;
    overflow: hidden;
    pointer-events: none;
    user-select: none;
  }

  .spp__popup-container .prev {
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    left: 0;
    top: 145px;
    height: 10px;
    background:linear-gradient(180deg, rgba(22, 21, 21, 0), rgba(22, 21, 21, 0.2));
    z-index: 1;
  }

  .spp__popup-container img {
    width: 100%;
    padding-top: 10px;
  }

  .spp__sup,
  .spp__popup-container h2,
  .spp__popup-container h3,
  .spp__popup-container li,
  .spp__popup-container a,
  .spp__popup-container button {
    color: #ffffff
  }

  .spp__popup-container h3 {
    font-size: 20px;
    margin-top: 0.8em;
    margin-bottom: 0.4em;
  }

  .spp__popup-container h2 {
    font-size: 1.5em;
    margin-top: 0.76em;
    margin-bottom: 0.56em;
  }

  .spp__popup-container ul {
    padding: 0 0 0 14px;
    margin: -5px 0 5px;
    font-size: 15px;
  }

  .spp__popup-container li {
    padding: 0;
    margin-bottom: 2px;
    font-size: 15px;
  }

  .spp__popup-container p {
    max-width: 96%;
    font-size: 14px;
    font-size: 13.4px;
    font-weight: 400;
    margin: 8px 0 16px;
    color: #868b90 !important;
    line-height: 140%;
    text-align: left;
  }

  .spp__popup-container .spp__sup {
    margin: 0.4em 0;
  }


  .close_btn,
  .spp__popup-container a,
  .spp__popup-container button {
    text-decoration: none !important;
    display: inline-block;
    overflow-wrap: no-wrap;
    border: 1px solid rgb(68, 86, 91, 0.5);
    border-radius: 10px;
    padding: 7px 10px;
    margin: 3px auto;
    max-width: 400px;
    background-color: #ffffff29 !important;
    color: white !important;
    text-align: center;
    font-size: 14px;
    font-size: 14.5px;
    cursor: pointer;
  }

  .spp__popup-container .close-popup {
    min-height: 33px;
  }

  .spp__popup-container a:hover,
  .spp__popup-container button:hover {
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.1) !important;
  }

  .spp__popup-container a:focus,
  .spp__popup-container button:focus {
    text-decoration: none;
  }

  .spp__popup-container {
    background-color: #000;
    padding: 5px 12px 8px 14px;
    box-sizing: border-box;
    transform: scale(1);
    border-radius: 15px;
    z-index: 100000 !important;
    font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  button.close_btn {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 100000;
    font-size: 12px;
    line-height: 12px;
    color: #fff;
    color: rgba(255, 255, 255, 0.9)!important;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 100px;
  }
</style>

            `;setTimeout(()=>{document.body.appendChild(n);var e=document.querySelectorAll(".closeNotification"),e=(e&&e?.forEach(e=>e.addEventListener("click",function(){n.style.display="none"})),s.storage.local.set({closeDonateCount:1+(isNaN(a.closeDonateCount)?0:+a.closeDonateCount)}),"string"==typeof t?.formState?.theme&&s.storage.local.set({formState:{...t.formState,timestamp:Date.now()}}),document.querySelectorAll(".donate-btn"));e.length&&e.forEach(e=>e.addEventListener("click",function(){s.storage.local.set({closeDonateCount:2})}))},6e5)}})})},!1)}})();