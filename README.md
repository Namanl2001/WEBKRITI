## INFOTSAV'20
# Project Description

* **OUR PROJECT IS A *TECH FEST* WEBSITE OF OUR COLLEGE.**
    * IN WHICH THERE ARE VARIOUS WEBPAGES NAMELY ( HOME PAGE, EVENTS PAGE, PARTICULAR EVENT'S PAGE {NAMELY : TECHNOVATION, SOFTWARE CORNER, ROBOWARS, ENTERPRENEURIAL EVENTS AND GAMIACS}, ABOUT US PAGE, CONTACT US PAGE, SPONSORS PAGE, LOGIN PAGE, SIGNUP PAGE, UPDATE PASSWORD PAGE, EVENT REGISTRATION PAGE ) ALL ARE INNOVATIVELY STYLED AND DESIGNED BY OUR TEAM WITH VARIOUS HOVER AND COLOR EFFECTS.

    * IN THIS WEBSITE ANY PERSON CAN SEE LIST OF ALL THE EVENTS AND THE DETAILS OF EACH PARTICULAR EVENT AS WELL BY CLICKING ON THE EVENTS NAME.

    * PERSON CAN ALSO VIEW THE CONTACT DETAILS OF THE FEST ORGANISERS AND ALSO REACH THEM VIA SOCIAL MEDIA HANDLES. GOOGLE MAP IS ALSO PROVIDED SO THAT THEY CAN REACH OUR COLLEGE EASILY.

    * ANY PERSON CAN MAKE AN ACCOUNT ON OUR WEBSITE, LOG IN TO IT AND THEN CAN REGISTER FOR ANY EVENT OF HIS CHOICE.

    * PERSON CAN WITHDRAW FROM ANY EVENT ANYTIME.

    * PERSON (IF HAVING A ACCOUNT) CAN UPDATE HIS ACCOUNT'S PASSWORD AND CAN ALSO DELETE HIS ACCOUNT COMLETELY IF HE WISHES TO.

# Features
**FRONTEND SPECIFICATIONS :**

* **OUR WEBSITE OPENS WITH AN INTRO PAGE WHICH APPEARS ONLY ONCE; IT HAS A "EXPLORE" BUTTON WHICH ON CLICKING TAKES US TO THE HOME PAGE. THE FONT STYLE OF THE HEADING IS "NOSIFER"** 

* **EACH PAGE IS RESPONSIVE**

* **ALL THE PAGES HAVE THE SPECIALLY DESIGNED SCROLL BAR** ( DONE USING WEBKIT-SCROLLBAR CSS PROPERTY NOT SUPPORTED BY FIREFOX BROWSER)

* **PAGES HAVE NAVIGATION BAR WHICH COMES SMOOTHLY FROM THE LEFT AND GOES BACK ON CLICKING THE CROSS BUTTON**
    * **ON HOVERING ON THE OPTION(S) IN THE NAVIGATION BAR (/SIDEBAR) THE TEXT AND THE LOGO'S OF THE OPTION(S) SHIFTS SMOOTHLY TO THE RIGHT WITH A BLUE COLOURED GLOW/SHADOW ON THE BORDER** 

* **USED GOOGLE MAP API AND CONTACT CARDS IN THE CONTACT US PAGE**

* **IN THE HOME PAGE-**
    * **EACH ALPHABET OF THE HEADER(INFOTSAV'20) GLOWS ONE BY ONE; THE COLOUR OF DATE BELOW THE HEADING CHANGES CONTINUOUSLY.**

    * THERE IS A LIST OF ALL THE EVENTS IN THE BOTTOM LEFT CORNER WITH THE FOLLOWING HOVER EFFECTS
        * **TEXT SHIFTS TO RIGHT,COLOUR CHANGES TO RED FROM WHITE & A UNDERLINE OF WHITE COLOUR APPEARS BELOW THE TEXT.**

    * **IN THE RIGHT CORNER OF THE WEBPAGE THERE IS A SHEDULE BUTTON CLICKING ON WHICH GIVES US A SHEDULE LIST OF THE FEST(BASICALLY IT COMES FROM RIGHT SMOOTHLY AND CLICKING THE SAME BUTTON AGAIN MOVES THE LIST BACK).**
    IT IS HAVING A BLUE COLOURED DOUBLE BORDER AND THE SAME DESIGNED SCROLL BAR AS SAID ABOVE.

    * SOCIAL MEDIA LOGO(S) ARE CONNECTED DIRECTLY TO THE SOCIAL MEDIA HANDLES OF THE OFFCIAL INFOTSAV FEST OF IIIT GWALIOR.

    * A NAVIGATION BAR AS DESCRIBED ABOVE.

    * HOVER EFFECTS ON LOGIN/SIGNUP BUTTON(S)

* **THE BACKGROUND COLOUR OF THE EVENTS PAGE CHANGES CONTINUOUSLY WITH THE HELP OF LINEAR-GRADIENT STYLING PROPERTY.**

* **ON HOVERING ANY (PARTICULAR) EVENT'S PHOTO IN THE EVENTS PAGE A DROP DOWN COMES FROM THE TOP OF THE HOVERED EVENT PIC WITH SOME DETAILS AND A EXPLORE BUTTON WHICH ON HOVERING SHIFTS TO LEFT AND A ARROW APPEARS TO ITS RIGHT LIKE THIS "EXPLORE >>" WHERE ">>" IS THE "\00BB" UNICODE CHARACHTER; THE BACKGROUND COLOUR OF THE BUTTON ALSO CHANGES.**

* **IN THE SIGNUP PAGE** 
    * **THERE IS A SEPERATE DROP DOWN FOR ENTERING THE DAY, MONTH & YEAR OF DOB.**
    * **DOB IS VERIFIED TAKING CARE OF NUMBER OF DAYS IN A MONTH**
     * **THE INPUT FORMAT OF PASSWORD AND CONFIRM PASSWORD IS "Aa123456" ATLEAST 1,[A-Z] ATLEAST 1,[a-z] ATLEAST 1,[0-9] AND MINIMUM LENGTH IS TO BE 8.**

    * THE FIRST INPUT TEXT FIELD (FULL NAME) IS AUTOFOCUSED.

    * RADIO BUTTONS FOR GENDER IN WHICH "MALE" IS AUTOCHECKED.

    * MAXIMUM CHARCHTER LIMIT FOR ENTERING THE CONTACT NUMBER IS 10.

    * THIS FORM HAS ALSO BEEN PROVIDED WITH A RESET BUTTON AT THE BOTTOM WHICH ON CLICKING MAKES ALL ENTRIES EMPTY/DEFAULT.
    
* **IN THE LOGIN PAGE**
    * **ON CLICKING ANY INPUT FIELD THE WIDTH OF THE FIELD INCREASES AND THE BORDER COLOUR ALSO CHANGES FROM BLUE TO LIGHT GREEN.**

    * **THE \<hr\> TAG IS STYLED IN SUCH A WAY THAT IT IS DARKLY VISIBLE AT THE CENTRE AND FADES AT THE LEFT & RIGHT ENDS.**

    * LETTER SPACING OF THE TEXT.

    * HOVER FFECT ON THE LOGIN AND SIGNUP BUTTON.
    
* **IN THE PARTICULAR EVENT(S) PAGE** 
    * **THE HEADING AND SUBHEADINGS HAVE A CONTINUOS UP & DOWN MOVEMENT AND THE TEXT COLOUR ALSO CHANGES CONTINUOUSLY BETWEEN BLACK AND WHITE.**

    * **THE BACKGROUND COLORS OF PRIZE MONEY ALSO CHANGES CONTINUOUSLY.**

    * **ON HOVERING OVER THE "REGISTER" BUTTON PRESENT AT THE BOTTOM, A SMALL LINE SEGMENT REVOLVES ON THE BUTTON'S BORDER AND AFTER A COMPLETE 360deg REVOLUTION THE BUTTON GLOWS.**

    * LETTER SPACING IN THE TEXT.
    
* **IN THE EVENT REGISTRATION PAGE THE AUTOCOMPLETE OF INPUT FIELD IS "ON" AND ON SELECTING FROM THE LIST THE BACKGROUND OF THE INPUT FIELD TURNS BLACK AND THERE IS ALSO SOME MARGIN FOR THE TEXT FROM THE LEFT. THIS PAGE ALSO CONTAINS A DROP DOWN OF ALL EVENTS [TO SELECT EVENT].**

* **IN THE CONTACT US PAGE THE CONTACT DETAILS OF OUR TEAM IS PRESENT ALONG WITH THE SOCIAL MEDIA HANDLES(LINKED DIRECTLY WITH THE LOGOS PRESENT BENEATH OUR RESPECTIVE DP's); THE GOOGLE MAP CONTAINING OUR COLLEGE'S ADDRESS IS ALSO ATTACHED IN THIS PAGE WITH THE HELP OF AN API.**

* IN THE SPONSORS PAGE WE CAN VIEW THE LIST OF THE SPONSRING COMPANIES WITH THEIR RESPECTIVE LOGOS CLICKING ON WHICH TAKES US TO THEIR RESPECTIVE OFFICIAL WEBSITE(S).

* GAP BETWEEN SOCIAL MEDIA LOGO'S IN CONTACT US PAGE AS THEY ARE IN THE SAME DIV.

* FONT OF "EVENTS" ON EVENTS PAGE

* USER CAN DIRECTLY MOVE TO SIGNUP AND FORGOT PASSWORD PAGE FROM LOGIN PAGE.

* HOVER EFFECTS ON THE "SUBMIT" & "RESET" BUTTON IN THE SIGNUP PAGE.

* DOUBLE BORDER IN THE SIGNUP,LOGIN,REGISTER EVENT, UPDATE PASSWORD FORM.
\
\
\
**BACKEND SPECIFICATIONS :**

* **"CRUD" IS IMPLEMENTED COMPLETELY**
* **PASSWORD IS STORED IN THE BCRYPTED FORM IN THE DATABASE [FOR THE SECURITY PURPOSE]**

* **FOR EACH USER ACCOUNT EMAIL ID. AND PHONE NO. IS UNIQUE [FOR PASSWORD UPDATION PURPOSE]**

* **USER CAN UPDATE HIS PASSWORD ONLY BY GIVING CORRECT REGISTERED EMAIL ID. AND USER_NAME**

* **USER CAN REGISTER FOR EACH EVENT ONLY ONCE FROM HIS/HER ACCOUNT**

* **USER CANNOT REGISTER FOR ANY EVENT WITHOUT LOGGING IN AND FOR THAT ACCOUNT IS MANDATORY**

* **ONCE THE USER IS LOGGED IN HE WILL BE ABLE TO SEE THE COUNT & LIST OF ALL THE EVENTS HE HAS REGISTERED FOR WITH A CANCEL BUTTON(HAVING HOVER, SHADOW AND CLICK EFFECTS) IN FRONT OF EACH REGISTERED EVENT , IN THE EVENTS PAGE.** 

* **USER CAN CANCEL HIS REGISTRATION FOR ANY EVENT (TO WHICH HE HAS REGISTERED EARLIER) AT ANY POINT OF TIME BUT FOR THAT IT IS REQUIRED THAT HE IS LOGGED IN TO HIS ACCOUNT.**

* **USER CAN DELETE HIS ACCOUNT AND IF HE DO SO THEN HIS ACCOUNT AS WELL AS ALL THE REGISTRATIONS OF EVENT(S) (IF ANY) WILL BE DELETED AUTOMATICALLY FROM THE DATABASE(TABLES)**

* **SERVER WILL SHOW AN ALERT MESSAGE IN THE FOLLOWING CASES**
    * IF A PERSON TRIES TO SIGN UP WITH THE EMAIL/PHONE WHICH ALREADY EXISTS IN THE DATABASE(users TABLE).

    * IF THE DOB ENTERED IN THE SIGNUP PAGE IS WRONG (LIKE 30-02-2000; 31-04-2000)

    * IF THE PASSWORD AND CONFIRM PASSWORD INPUTS DOES NOT MATCH IN THE SIGNUP AND UPDATE PASSWORD FORM

    * IF THE USER TRIES TO REGISTER FOR AN EVENT TO WHICH HE HAS ALREADY REGISTERED.

    * IF A USER TRIES TO LOGIN TO HIS ACCOUNT WHICH DOES NOT EXIST THEN THE ALERT MESSAGE WILL BE "USER DOES NOT EXIST"
    WHILE IF HE HAS A VALID ACCOUNT AND ALSO ENTERS THE CORRECT EMAIL BUT INCORRECT PASSWORD THEN ALERT WILL BE "INCORRECT PASSWORD".
    
    
## SCREENSHOTS

https://drive.google.com/drive/folders/1SNfPZkHeKqT-1KLvQC_5rv3lE-BfwEiM?usp=sharing

## VIDEO
https://drive.google.com/file/d/1xlJ6zNeSsw5-_T5cxqx4Gill72-E2ySX/view?usp=sharing

## HOSTED WEBSITE LINK

https://infotsav-20.herokuapp.com/   
\
NOTE: THE WEBSITE IS WORKING GREAT IN WINDOWS AND MOBILE PHONE BUT MIGHT HAVE SOME VISUAL DISORDERS IN THE LINUX OS.

