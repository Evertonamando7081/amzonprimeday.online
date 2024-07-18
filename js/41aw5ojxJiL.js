'use strict';mix_d("TellAmazonDesktopCards__tell-amazon-desktop:tell-amazon-desktop__3hF3eLNR","exports tslib @c/scoped-dom @c/aui-modal @c/browser-operations @c/remote-operations".split(" "),function(ka,c,Da,Ea,la,Fa){function ma(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}var F=ma(Da),Ga=ma(Ea),G;(function(a){a.openTellAmazonModal="openTellAmazonModal";a.openTellAmazonBottomSheet="openTellAmazonBottomSheet";a.submitForm="submit"})(G||(G={}));var A={tellAmazonDiv:"_tell-amazon-desktop_style_tell_amazon_div__1YDZk",
tellAmazonLink:"_tell-amazon-desktop_style_tell_amazon_link__1KW5z",tellAmazonModalSubmitButton:"_tell-amazon-desktop_style_tell_amazon_modal_submit_button__3kYr9",tellAmazonForm:"_tell-amazon-desktop_style_tell_amazon_form__3ELPG",tellAmazonModalEnd:"_tell-amazon-desktop_style_tell_amazon_modal_end__30n3x",tellAmazonDetailsSection:"_tell-amazon-desktop_style_tell_amazon_details_section__OyMoa",tellAmazonDetailsLabel:"_tell-amazon-desktop_style_tell_amazon_details_label__1lDih",tellAmazonDetailsTextArea:"_tell-amazon-desktop_style_tell_amazon_details_text_area__3_n0I",
tellAmazonFirstLevelDropdownLabel:"_tell-amazon-desktop_style_tell_amazon_first_level_dropdown_label__36syI",tellAmazonFirstLevelDropdownContainer:"_tell-amazon-desktop_style_tell_amazon_first_level_dropdown_container__1Ku2h",tellAmazonSecondLevelDropdownLabel:"_tell-amazon-desktop_style_tell_amazon_second_level_dropdown_label__yQqOu",tellAmazonSecondLevelDropdownContainer:"_tell-amazon-desktop_style_tell_amazon_second_level_dropdown_container__3e5FN",tellAmazonThirdLevelDropdownLabel:"_tell-amazon-desktop_style_tell_amazon_third_level_dropdown_label__3wuIo",
tellAmazonThirdLevelDropdownContainer:"_tell-amazon-desktop_style_tell_amazon_third_level_dropdown_container__3lTrD",tellAmazonThirdLevelCheckboxContainer:"_tell-amazon-desktop_style_tellAmazonThirdLevelCheckboxContainer__2kR7h",tellAmazonAlertPersonalInfo:"_tell-amazon-desktop_style_tell_amazon_alert_personal_info__3ZTTb",tellAmazonAlertYourAccount:"_tell-amazon-desktop_style_tell_amazon_alert_your_account__2x7hR",tellAmazonAlertPnf:"_tell-amazon-desktop_style_tell_amazon_alert_pnf__1mkcH",tellAmazonAlertC2c:"_tell-amazon-desktop_style_tell_amazon_alert_c2c__3Vlt5",
tellAmazonFormContainer:"_tell-amazon-desktop_style_tell_amazon_form_container__1MC8C",tellAmazonReviews:"_tell-amazon-desktop_style_tell_amazon_reviews__3EHvZ",tellAmazonImages:"_tell-amazon-desktop_style_tell_amazon_images__vLW8h",tellAmazonTitle:"_tell-amazon-desktop_style_tell_amazon_title__1tHc_",tellAmazonBulletPoints:"_tell-amazon-desktop_style_tell_amazon_bullet_points__3TGuw",tellAmazonBrand:"_tell-amazon-desktop_style_tell_amazon_brand__33gP-",tellAmazonOther:"_tell-amazon-desktop_style_tell_amazon_other__7Pfhw",
tellAmazonGoodFaithCheckbox:"_tell-amazon-desktop_style_tell_amazon_good_faith_checkbox__3neke",tellAmazonSubmitButton:"_tell-amazon-desktop_style_tell_amazon_submit_button__3vz6W",tellAmazonNoEmailContainer:"_tell-amazon-desktop_style_tell_amazon_no_email_container__HfamX",tellAmazonDropdownsLabel:"_tell-amazon-desktop_style_tell_amazon_dropdowns_label__2k_1V",tellAmazonFieldsetLegend:"_tell-amazon-desktop_style_tell_amazon_fieldset_legend__1XW1-",tellAmazonAlert:"_tell-amazon-desktop_style_tell_amazon_alert__14ANY",
tellAmazonFirstLevel:"_tell-amazon-desktop_style_tell_amazon_first_level__1x77_",tellAmazonSecondLevel:"_tell-amazon-desktop_style_tell_amazon_second_level__1xVpa",tellAmazonThirdLevel:"_tell-amazon-desktop_style_tell_amazon_third_level__3TdI4",tellAmazonGoodFaith:"_tell-amazon-desktop_style_tell_amazon_good_faith__3rS2G",tellAmazonModalRoot:"_tell-amazon-desktop_style_tell_amazon_modal_root__1q10s aok-hidden",tellAmazonPopoverInner:"_tell-amazon-desktop_style_tell_amazon_popover_inner__3tPIV",tellAmazonModalSpinner:"_tell-amazon-desktop_style_tell_amazon_modal_spinner__3bz5K",
tellAmazonThankyouContainer:"_tell-amazon-desktop_style_tell_amazon_thankyou_container__1Cu-y",tellAmazonTryAgainMessage:"_tell-amazon-desktop_style_tell_amazon_try_again_message__1BEKR",tellAmazonModalHeader:"_tell-amazon-desktop_style_tell_amazon_modal_header__3KGHD",tellAmazonButtonClose:"_tell-amazon-desktop_style_tell_amazon_button_close__3JLWO",tellAmazonDetailsGuideline:"_tell-amazon-desktop_style_tell_amazon_details_guideline__2YhMZ",tellAmazonNoEmailAlert:"_tell-amazon-desktop_style_tell_amazon_no_email_alert__1t6PT"},
Y;(function(a){a.US="ATVPDKIKX0DER";a.UK="A1F83G8C2ARO7P";a.JP="A1VC38T7YXB528";a.CA="A2EUQ1WTGCTBG2";a.DE="A1PA6795UKMFR9";a.FR="A13V1IB3VIYZZH";a.IT="APJ6JRA9NG5V4";a.ES="A1RKKUPIHCS9HS";a.EG="ARBP9OOSHTCHU";a.IN="A21TJRUUN4KGV";a.CN="AAHKV2X7AFYLW";a.BR="A2Q3Y263D00KWC";a.MX="A1AM78C64UM0Y8";a.AU="A39IBJ37TRP1C6";a.RU="AD2EMQ3L3PG8S";a.NL="A1805IZSGTT6HS";a.AE="A2VIGQ35RCS4UG";a.SA="A17E79C6D8DWNP";a.TR="A33AVAJ2PDY3EV";a.SG="A19VAU5U5O7RUS";a.PL="A1C3SOZRARQ6R3";a.SE="A2NODRKZP88ZB9";a.BE="AMEN7PMS3EDWL";
a.CO="A1ZXRLSQW2V54D";a.CL="A2WDZJZ5TCRMLH";a.NG="A3OCL2LJ6GDH9T";a.ZA="AE08WJ6YKNBMC";a.IE="A28R8C7NBKEWEA"})(Y||(Y={}));var Ha={displaySecondLevel:!1,displayAlert:!1,defaultAlert:"noPersonalInfoAlert",detailSection:{optional:!0,display:!1,title:"comments"},firstLevel:{values:"problemWithOrder productInformationMissingInaccurateOrImproved partOfThisPageDontMatch issueWithPrice productContentOffensive productContentIllegalUnsafeSuspicious other".split(" "),title:"pleaseTellUsAboutTheIssue",prompt:"whatIsWrongWithThisPage",
options:{problemWithOrder:{values:[],prompt:"",options:{default:{values:[],prompt:"",alert:new Set(["yourAccountAlert"]),submitButton:!1,details:{display:!1,optional:!0,title:"whatsTheIssue"}}}},productInformationMissingInaccurateOrImproved:{values:"images sizeDimensions releaseInformation modelEdition brand other".split(" "),prompt:"whatInformationMissingImprovement",options:{images:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}},
sizeDimensions:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}},releaseInformation:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}},modelEdition:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}},brand:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,
details:{display:!0,optional:!0,title:"comments"}},other:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}}}},partOfThisPageDontMatch:{values:[],prompt:"",options:{default:{values:[],alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,prompt:"whichPartsDontMatch",checkboxes:new Set("reviews images title bulletPoints brand other".split(" ")),details:{display:!0,optional:!0,title:"comments"}}}},issueWithPrice:{values:"priceDisparity haveFoundLowerPrice discountCouponError higherShippingCosts pricesForUsedHigher other".split(" "),
prompt:"whatsTheIssue",options:{priceDisparity:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}},haveFoundLowerPrice:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}},discountCouponError:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}},higherShippingCosts:{values:[],prompt:"",
alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}},pricesForUsedHigher:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}},other:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}}}},productContentOffensive:{values:["sexuallyExplicitContent","other"],prompt:"whyIsItOffensive",options:{sexuallyExplicitContent:{values:[],
prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}},other:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}}}},productContentIllegalUnsafeSuspicious:{values:["itsCounterfeit","usesMyIntellectualPropertyWithoutPermission","notSafeCompliantProductSafetyRegulations","reviewsQuestionsAnswersContainIllegal","productContentOtherwiseIllegal"],prompt:"whatsTheIssue",
options:{itsCounterfeit:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,checkboxes:new Set(["goodFaith"]),details:{display:!0,optional:!1,title:"details"}},usesMyIntellectualPropertyWithoutPermission:{values:[],prompt:"",alert:new Set(["goToPnfAlert"]),submitButton:!1,details:{display:!1,optional:!0,title:"comments"}},notSafeCompliantProductSafetyRegulations:{values:"haveInformationShowingItemNotSafe warningsDisclaimersMarkings missingProductAuthorization instructionsForUse contactDetails other".split(" "),
prompt:"whyIsntProductSafeCompliant",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,checkboxes:new Set(["goodFaith"]),details:{display:!0,optional:!1,title:"details"}},reviewsQuestionsAnswersContainIllegal:{values:["productReviewFakeIllegal","userProfileInformationReviewsIllegalContent","customerQuestionsAnswersIllegalContent"],prompt:"whereIsIssue",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,checkboxes:new Set(["goodFaith"]),details:{display:!0,optional:!1,title:"details",guideline:!0,
guidelineValue:{productReviewFakeIllegal:"pleaseIncludeLinkSpecificReview",userProfileInformationReviewsIllegalContent:"pleaseIncludeLinkSpecificReview",customerQuestionsAnswersIllegalContent:"pleaseIncludeLinkSpecifyQuestionAnswer"}}},productContentOtherwiseIllegal:{values:["firearmIllegalWeapon","illegalDrugMedicine","containsProhibitedIngredientsSubstances","imageProductDescriptionContainsIllegalContent","other"],prompt:"whyIllegal",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,checkboxes:new Set(["goodFaith"]),
details:{display:!0,optional:!1,title:"details"}}}},other:{values:[],prompt:"",options:{default:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"whatsTheIssue"}}}}}}},Ia={displaySecondLevel:!1,displayAlert:!1,defaultAlert:"noPersonalInfoAlert",detailSection:{optional:!0,display:!1,title:"comments"},firstLevel:{values:"problemWithOrder productInformationMissingInaccurateOrImproved partOfThisPageDontMatch issueWithPrice productContentOffensive productContentIllegalUnsafeSuspicious iHaveIssueWithSeller other".split(" "),
title:"pleaseTellUsAboutTheIssue",prompt:"whatIsWrongWithThisPage",options:{problemWithOrder:{values:[],prompt:"",options:{default:{values:[],prompt:"",alert:new Set(["yourAccountAlert"]),submitButton:!1,details:{display:!1,optional:!0,title:"whatsTheIssue"}}}},productInformationMissingInaccurateOrImproved:{values:"images sizeDimensions releaseInformation modelEdition brand other".split(" "),prompt:"whatInformationMissingImprovement",options:{images:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),
submitButton:!0,details:{display:!0,optional:!0,title:"comments"}},sizeDimensions:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}},releaseInformation:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}},modelEdition:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}},brand:{values:[],
prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}},other:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}}}},partOfThisPageDontMatch:{values:[],prompt:"",options:{default:{values:[],alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,prompt:"whichPartsDontMatch",checkboxes:new Set("reviews images title bulletPoints brand other".split(" ")),details:{display:!0,
optional:!0,title:"comments"}}}},issueWithPrice:{values:"priceDisparity haveFoundLowerPrice discountCouponError higherShippingCosts pricesForUsedHigher other".split(" "),prompt:"whatsTheIssue",options:{priceDisparity:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}},haveFoundLowerPrice:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}},discountCouponError:{values:[],
prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}},higherShippingCosts:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}},pricesForUsedHigher:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}},other:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,
optional:!0,title:"comments"}}}},productContentOffensive:{values:["sexuallyExplicitContent","other"],prompt:"whyIsItOffensive",options:{sexuallyExplicitContent:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}},other:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"comments"}}}},productContentIllegalUnsafeSuspicious:{values:["itsCounterfeit","usesMyIntellectualPropertyWithoutPermission",
"notSafeCompliantProductSafetyRegulations","reviewsQuestionsAnswersContainIllegal","productContentOtherwiseIllegal"],prompt:"whatsTheIssue",options:{itsCounterfeit:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert","tellAmazonAlertC2c"]),submitButton:!0,checkboxes:new Set(["goodFaith"]),details:{display:!0,optional:!1,title:"details"}},usesMyIntellectualPropertyWithoutPermission:{values:[],prompt:"",alert:new Set(["goToPnfAlert"]),submitButton:!1,details:{display:!1,optional:!0,title:"comments"}},
notSafeCompliantProductSafetyRegulations:{values:"haveInformationShowingItemNotSafe warningsDisclaimersMarkings missingProductAuthorization instructionsForUse contactDetails other".split(" "),prompt:"whyIsntProductSafeCompliant",alert:new Set(["noPersonalInfoAlert","tellAmazonAlertC2c"]),submitButton:!0,checkboxes:new Set(["goodFaith"]),details:{display:!0,optional:!1,title:"details"}},reviewsQuestionsAnswersContainIllegal:{values:["productReviewFakeIllegal","userProfileInformationReviewsIllegalContent",
"customerQuestionsAnswersIllegalContent"],prompt:"whereIsIssue",alert:new Set(["noPersonalInfoAlert","tellAmazonAlertC2c"]),submitButton:!0,checkboxes:new Set(["goodFaith"]),details:{display:!0,optional:!1,title:"details",guideline:!0,guidelineValue:{productReviewFakeIllegal:"pleaseIncludeLinkSpecificReview",userProfileInformationReviewsIllegalContent:"pleaseIncludeLinkSpecificReview",customerQuestionsAnswersIllegalContent:"pleaseIncludeLinkSpecifyQuestionAnswer"}}},productContentOtherwiseIllegal:{values:["firearmIllegalWeapon",
"illegalDrugMedicine","containsProhibitedIngredientsSubstances","imageProductDescriptionContainsIllegalContent","other"],prompt:"whyIllegal",alert:new Set(["noPersonalInfoAlert","tellAmazonAlertC2c"]),submitButton:!0,checkboxes:new Set(["goodFaith"]),details:{display:!0,optional:!1,title:"details"}}}},iHaveIssueWithSeller:{values:["sellerIsUsingFalseOrMisleadingIdentityInformation","sellerIsUsingFalseOrMisleadingContactInformation","sellerIsAttemptingToManipulateReviews","sellerIsEngagingInOtherInappropriateActivity",
"otherIssueWithSeller"],prompt:"whatsTheIssue",options:{sellerIsUsingFalseOrMisleadingIdentityInformation:{values:["sellerIsRepresentingMyBusinessInformationAsItsOwn","sellerIsUsingMyPersonalInformationAsItsOwn","other"],prompt:"whatsTheIssue",alert:new Set(["noPersonalInfoAlert","tellAmazonAlertC2c"]),submitButton:!0,details:{display:!0,optional:!1,title:"describeTheIssue",guideline:!0,guidelineValue:"pleaseProvideStoreNameSeller"}},sellerIsUsingFalseOrMisleadingContactInformation:{values:["sellerIsUsingAFalseOrInaccurateAddressInformation",
"sellerIsUsingAFalseOrInaccuratePhoneNumber","other"],prompt:"whatsTheIssue",alert:new Set(["noPersonalInfoAlert","tellAmazonAlertC2c"]),submitButton:!0,details:{display:!0,optional:!1,title:"describeTheIssue",guideline:!0,guidelineValue:"pleaseProvideStoreNameSeller"}},sellerIsAttemptingToManipulateReviews:{values:["sellerIsSendingMeUnwantedCommunicationsAboutAReviewIPosted","sellerIsOfferingMeMoneyToPostOrRemoveAReview","other"],prompt:"whatsTheIssue",alert:new Set(["noPersonalInfoAlert","tellAmazonAlertC2c"]),
submitButton:!0,details:{display:!0,optional:!1,title:"describeTheIssue",guideline:!0,guidelineValue:"pleaseProvideStoreNameSeller"}},sellerIsEngagingInOtherInappropriateActivity:{values:["sellerIsSendingMeUnsolicitedInappropriateCommunications","sellerIsAttemptingToDamageMyBusiness","sellerIsUsingUnfairOrDeceptiveBusinessTactics","other"],prompt:"whatsTheIssue",alert:new Set(["noPersonalInfoAlert","tellAmazonAlertC2c"]),submitButton:!0,details:{display:!0,optional:!1,title:"describeTheIssue",guideline:!0,
guidelineValue:"pleaseProvideStoreNameSeller"}},otherIssueWithSeller:{values:[],prompt:"whatsTheIssue",alert:new Set(["noPersonalInfoAlert","tellAmazonAlertC2c"]),submitButton:!0,details:{display:!0,optional:!1,title:"describeTheIssue",guideline:!0,guidelineValue:"pleaseProvideStoreNameSeller"}}}},other:{values:[],prompt:"",options:{default:{values:[],prompt:"",alert:new Set(["noPersonalInfoAlert"]),submitButton:!0,details:{display:!0,optional:!0,title:"whatsTheIssue"}}}}}}},B,Z,t,U,x,N,na,oa,pa,
qa,ra,V,aa,ba,C,O,sa,H,Q,ta,R,ua,I,D,k,y={},n,u,ca=!1,da,ea,p;(function(a){a.FirstLevel="tellAmazon_firstLevelDropdown";a.SecondLevel="tellAmazon_secondLevelDropdown";a.ThirdLevel="tellAmazon_thirdLevelDropdown"})(p||(p={}));var Ma=function(a,b){return c.__awaiter(void 0,void 0,void 0,function(){return c.__generator(this,function(f){n=a;u=b;P.when("a-dropdown").execute(function(d){return c.__awaiter(void 0,void 0,void 0,function(){return c.__generator(this,function(e){switch(e.label){case 0:return B=
d.getSelect(p.FirstLevel),t=d.getSelect(p.SecondLevel),x=d.getSelect(p.ThirdLevel),[4,Ja()];case 1:return e.sent(),[4,Ka()];case 2:return e.sent(),[2]}})})});P.when("A").execute(function(d){return c.__awaiter(void 0,void 0,void 0,function(){return c.__generator(this,function(e){d.on("a:dropdown:selected:"+p.FirstLevel,La);d.on("a:dropdown:selected:"+p.SecondLevel,va);d.on("a:dropdown:selected:"+p.ThirdLevel,wa);return[2]})})});Z.required=!0;Z.oninvalid=fa;return[2]})})},Oa=function(a,b,f,d,e,h,g){return c.__awaiter(void 0,
void 0,void 0,function(){var m,l,q,v;return c.__generator(this,function(r){switch(r.label){case 0:b.event.preventDefault();if(ca)return[2];S(!0);m=a.cardRoot.getElementsByClassName(f.tellAmazonDiv)[0];var w=0<B.val().length,z=!0,J=!0;0<t.getOptions().size()&&(z=0<t.val().length);w||B.update({status:"error"});w&&!z&&t.update({status:"error"});k&&0<k.values.length&&((J=0<x.val().length)||x.update({status:"error"}));if(!(w&&z&&J&&m.dataset.asin))return[3,5];var xa;w=[];z={partsOfPage:w,tellAmazon_firstLevelDropdown:""};
try{for(var W=c.__values(b.event.target),T=W.next();!T.done;T=W.next()){var E=T.value;E.checked?w.push(E.name):E.value&&0<E.value.length&&"on"!==E.value&&(z[E.name]=E.value)}}catch(Na){var ya={error:Na}}finally{try{T&&!T.done&&(xa=W.return)&&xa.call(W)}finally{if(ya)throw ya.error;}}l=z;q={firstLevelValue:l.tellAmazon_firstLevelDropdown,secondLevelValue:l.tellAmazon_secondLevelDropdown||"",thirdLevelValue:l.tellAmazon_thirdLevelDropdown||"",checkboxes:l.partsOfPage,userComments:l.details||"",asin:m.dataset.asin,
customerEmail:d,weblab:"",deviceType:h};g&&(q.weblab=g.weblabName+":"+g.treatment);r.label=1;case 1:return r.trys.push([1,3,,4]),v=void 0,[4,e.sendDefectToNoreaster({formValues:q})];case 2:return(v=r.sent())?(ea.style.display="none",na.style.display="block",K(!1)):(K(!0),S(!1)),[3,4];case 3:return r.sent(),K(!0),S(!1),[3,4];case 4:return[3,6];case 5:S(!1),r.label=6;case 6:return[2]}})})},Ja=function(){return c.__awaiter(void 0,void 0,void 0,function(){var a,b,f,d,e,h;return c.__generator(this,function(g){switch(g.label){case 0:return[4,
B.update({status:"normal"})];case 1:return g.sent(),[4,t.update({status:"disabled"})];case 2:return g.sent(),[4,x.update({status:"disabled"})];case 3:g.sent();V.style.display=n.displaySecondLevel?"block":"none";R.style.display=n.displayAlert?"block":"none";try{for(a=c.__values(Object.keys(y)),b=a.next();!b.done;b=a.next())f=b.value,y[f].style.display=f===n.defaultAlert?"block":"none",y[f].setAttribute("aria-hidden",f!==n.defaultAlert)}catch(m){e={error:m}}finally{try{b&&!b.done&&(h=a.return)&&h.call(a)}finally{if(e)throw e.error;
}}za(n.defaultAlert,n.detailSection);d=n.firstLevel.title;ra.innerHTML=u[d];X(n.detailSection);K(!1);S(!1);return[2]}})})},Ka=function(){return c.__awaiter(void 0,void 0,void 0,function(){var a;return c.__generator(this,function(b){switch(b.label){case 0:return a=u[n.firstLevel.prompt],[4,ha(B,n.firstLevel.values,a,oa)];case 1:return b.sent(),[2]}})})},ha=function(a,b,f,d){return c.__awaiter(void 0,void 0,void 0,function(){var e;return c.__generator(this,function(h){switch(h.label){case 0:return d.innerHTML=
f,a.removeOptions(),a.setValue(""),e=b.map(function(g){return{value:g,text:u[g]}}),[4,a.addOptions(e)];case 1:return h.sent(),[2]}})})},X=function(a){var b=u[a.title];b+=a.optional?" ("+u.optional+")":"";sa.innerHTML=b;ua.style.display=a.display?"block":"none";H.required=!a.optional;H.value="";Q.style.display="none"},Pa=function(a){return c.__awaiter(void 0,void 0,void 0,function(){var b;return c.__generator(this,function(f){switch(f.label){case 0:return b=a.prompt?u[a.prompt]:"",[4,ha(x,a.values,
b,qa)];case 1:return f.sent(),0<a.values.length&&(x.update({status:"normal"}),ba.style.display="block",N.required=!0,N.oninvalid=fa),[2]}})})},K=function(a){ta.style.display=a?"block":"none"},La=function(a){return c.__awaiter(void 0,void 0,void 0,function(){var b,f,d;return c.__generator(this,function(e){switch(e.label){case 0:U.required=!1;X(n.detailSection);V.style.display=n.displaySecondLevel?"block":"none";H.required=!1;aa.style.display="none";R.style.display=n.displayAlert?"block":"none";I.style.display=
"inline-block";B.update({status:"normal"});t.update({status:"normal"});t.setValue("");t.removeOptions();x.setValue("");k=null;x.removeOptions();N.required=!1;K(!1);Aa();b=a.value;D=n.firstLevel.options[b];if(0!==D.values.length)return[3,2];k=null===(d=D.options)||void 0===d?void 0:d.default;return[4,va()];case 1:return e.sent(),[2];case 2:return V.style.display="block",f=u[D.prompt],[4,ha(t,D.values,f,pa)];case 3:return e.sent(),U.required=!0,U.oninvalid=fa,[2]}})})},va=function(a){return c.__awaiter(void 0,
void 0,void 0,function(){return c.__generator(this,function(b){switch(b.label){case 0:Ba();Aa();a&&D.options&&(k=D.options[a.value]);if(!k)return[2];X(k.details);ba.style.display="none";C.style.display="none";N.required=!1;O.required=!1;return[4,Pa(k)];case 1:b.sent();b=k;var f;if(b.checkboxes){var d=b.checkboxes;C.style.display="block";var e=C.getElementsByClassName("a-checkbox");try{for(var h=c.__values(Array.from(e)),g=h.next();!g.done;g=h.next()){var m=g.value;d.has(m.dataset.name)?m.style.display=
"block":m.style.display="none"}}catch(J){var l={error:J}}finally{try{g&&!g.done&&(f=h.return)&&f.call(h)}finally{if(l)throw l.error;}}O.checked=!1;O.required=d.has("goodFaith")?!0:!1;if(!d.has("goodFaith")||1<d.size)da.innerHTML=u[b.prompt]}R.style.display="none";var q;if(k.alert){l=k.alert;R.style.display="block";try{for(var v=c.__values(Object.keys(y)),r=v.next();!r.done;r=v.next()){var w=r.value;y[w].style.display=l.has(w)?"block":"none";y[w].setAttribute("aria-hidden",!l.has(w))}}catch(J){var z=
{error:J}}finally{try{r&&!r.done&&(q=v.return)&&q.call(v)}finally{if(z)throw z.error;}}}za(k.alert,k.details);I.style.display="none";k.submitButton&&(I.style.display="inline-block");aa.style.display=k.checkboxes||0<k.values.length?"block":"none";0===k.values.length&&wa();return[2]}})})},Aa=function(){var a,b,f=C.getElementsByTagName("input");try{for(var d=c.__values(Array.from(f)),e=d.next();!e.done;e=d.next()){var h=e.value;h.checked=!1}}catch(v){var g={error:v}}finally{try{e&&!e.done&&(a=d.return)&&
a.call(d)}finally{if(g)throw g.error;}}O.required=!1;C.style.display="none";da.innerHTML="";g=C.getElementsByTagName("p");try{for(var m=c.__values(Array.from(g)),l=m.next();!l.done;l=m.next())h=l.value,h.style.display="none"}catch(v){var q={error:v}}finally{try{l&&!l.done&&(b=m.return)&&b.call(m)}finally{if(q)throw q.error;}}},Ba=function(){B.update({status:"normal"});t.update({status:"normal"});x.update({status:"normal"});K(!1)},wa=function(a){return c.__awaiter(void 0,void 0,void 0,function(){var b;
return c.__generator(this,function(f){Ba();k&&(X(k.details),k.details.guideline&&k.details.guidelineValue&&(Q.style.display="block","string"===typeof k.details.guidelineValue?Q.innerHTML=u[k.details.guidelineValue]:a&&(b=k.details.guidelineValue[a.value],Q.innerHTML=u[b])));return[2]})})},Qa=function(a,b){sa=a.getElementsByClassName(b.tellAmazonDetailsLabel)[0];H=a.getElementsByClassName(b.tellAmazonDetailsTextArea)[0].getElementsByTagName("textarea")[0];Q=a.getElementsByClassName(b.tellAmazonDetailsGuideline)[0];
oa=a.getElementsByClassName(b.tellAmazonFirstLevelDropdownLabel)[0];pa=a.getElementsByClassName(b.tellAmazonSecondLevelDropdownLabel)[0];qa=a.getElementsByClassName(b.tellAmazonThirdLevelDropdownLabel)[0];ra=a.getElementsByClassName(b.tellAmazonDropdownsLabel)[0];ta=a.getElementsByClassName(b.tellAmazonTryAgainMessage)[0];ea=a.getElementsByClassName(b.tellAmazonFormContainer)[0];na=a.getElementsByClassName(b.tellAmazonThankyouContainer)[0];V=a.getElementsByClassName(b.tellAmazonSecondLevel)[0];R=
a.getElementsByClassName(b.tellAmazonAlert)[0];aa=a.getElementsByClassName(b.tellAmazonThirdLevel)[0];ua=a.getElementsByClassName(b.tellAmazonDetailsSection)[0];ba=a.getElementsByClassName(b.tellAmazonThirdLevelDropdownContainer)[0];C=a.getElementsByClassName(b.tellAmazonThirdLevelCheckboxContainer)[0];O=a.getElementsByClassName(b.tellAmazonGoodFaith)[0].getElementsByTagName("input")[0];y.noPersonalInfoAlert=a.getElementsByClassName(b.tellAmazonAlertPersonalInfo)[0];y.yourAccountAlert=a.getElementsByClassName(b.tellAmazonAlertYourAccount)[0];
y.tellAmazonAlertC2c=a.getElementsByClassName(b.tellAmazonAlertC2c)[0];y.goToPnfAlert=a.getElementsByClassName(b.tellAmazonAlertPnf)[0];I=a.getElementsByClassName(b.tellAmazonSubmitButton)[0];Z=a.querySelector("#"+p.FirstLevel);U=a.querySelector("#"+p.SecondLevel);N=a.querySelector("#"+p.ThirdLevel);da=a.getElementsByClassName(b.tellAmazonFieldsetLegend)[0]},S=function(a){a?(I.classList.add("a-button-disabled"),ca=!0):(I.classList.remove("a-button-disabled"),ca=!1)},za=function(a,b){if(b.display){var f=
"";Array.from(a).forEach(function(d){f+="tellAmazon_"+d+" "});b.guideline&&(f="tellAmazon_guideline "+f);H.setAttribute("aria-describedby",f)}else H.setAttribute("aria-describedby","")},fa=function(a){a=a.target.id;a===p.FirstLevel?B.update({status:"error"}):a===p.SecondLevel?t.update({status:"error"}):x.update({status:"error"})},L=Fa.setup(),ia,Ca,ja,M,Sa=function(){if(void 0===M){var a=F["default"].cardRoot.getElementsByClassName(A.tellAmazonModalEnd)[0],b=F["default"].cardRoot.getElementsByClassName(A.tellAmazonModalSpinner)[0],
f="."+A.tellAmazonModalRoot.replace(" ",".");M=Ga["default"].create("tellAmazon-modal",f,{a11yOpenMessage:ia.reportAnIssue,closeButton:!1});M.on("beforeShow",function(){return c.__awaiter(void 0,void 0,void 0,function(){return c.__generator(this,function(d){switch(d.label){case 0:return[4,Ra(M,a)];case 1:return[2,d.sent()]}})})});M.on("afterHide",function(){return c.__awaiter(void 0,void 0,void 0,function(){return c.__generator(this,function(d){a.innerHTML="";a.appendChild(b);return[2]})})})}},Ra=
function(a,b){return c.__awaiter(void 0,void 0,void 0,function(){var f,d,e,h;return c.__generator(this,function(g){switch(g.label){case 0:return f=F["default"].cardRoot.getElementsByClassName(A.tellAmazonDiv)[0],d=""+f.dataset.loggedIn,e=""+f.dataset.asin,"true"!==d?[3,6]:[4,L.checkIfUserHasEmail({})];case 1:return h=g.sent(),ja=h.emailAssociated?h.emailAssociated:"",""!==ja?[3,3]:[4,Ta(a,b,e)];case 2:return g.sent(),[3,5];case 3:return[4,Ua(a,b)];case 4:g.sent(),g.label=5;case 5:return[3,8];case 6:return[4,
Va(a,b,e)];case 7:g.sent(),g.label=8;case 8:return[2]}})})},Ta=function(a,b,f){return c.__awaiter(void 0,void 0,void 0,function(){var d;return c.__generator(this,function(e){switch(e.label){case 0:return[4,L.fetchCustomerNoEmailModalContent({asin:f})];case 1:return d=e.sent(),[4,a.render(function(h){return c.__awaiter(void 0,void 0,void 0,function(){return c.__generator(this,function(g){b&&(b.innerHTML="",b.append(d));return[2]})})})];case 2:return e.sent(),[2]}})})},Va=function(a,b,f){return c.__awaiter(void 0,
void 0,void 0,function(){var d;return c.__generator(this,function(e){switch(e.label){case 0:return[4,L.fetchCustomerNotLoggedModalContent({asin:f})];case 1:return d=e.sent(),[4,a.render(function(h){return c.__awaiter(void 0,void 0,void 0,function(){return c.__generator(this,function(g){b&&(b.innerHTML="",b.append(d));return[2]})})})];case 2:return e.sent(),[2]}})})},Ua=function(a,b){return c.__awaiter(void 0,void 0,void 0,function(){var f;return c.__generator(this,function(d){switch(d.label){case 0:return[4,
L.fetchTellAmazonModalContent({})];case 1:return f=d.sent(),[4,a.render(function(e){return c.__awaiter(void 0,void 0,void 0,function(){var h,g;return c.__generator(this,function(m){switch(m.label){case 0:if(!b)return[3,2];b.innerHTML="";b.append(f);Qa(e,A);return[4,Ma(Ca,ia)];case 1:m.sent(),h=la.setup(),h.define(G.submitForm,"submit",function(l){return c.__awaiter(void 0,void 0,void 0,function(){return c.__generator(this,function(q){switch(q.label){case 0:return[4,Oa(F["default"],l,A,ja,L,"desktop",
void 0)];case 1:return q.sent(),l.stopBubble(),[2]}})})}),(g=e.querySelector("#tellAmazonModal_form"))&&h.attach(G.submitForm,g),ea.style.display="block",m.label=2;case 2:return[2]}})})})];case 2:return d.sent(),[2]}})})};ka._operationNames="getStrings getTreatment checkIfUserHasEmail sendDefectToNoreaster fetchTellAmazonModalContent fetchCustomerNoEmailModalContent fetchCustomerNotLoggedModalContent".split(" ");ka.card=function(){return c.__awaiter(void 0,void 0,void 0,function(){var a,b;return c.__generator(this,
function(f){if(a=F["default"].cardRoot.getElementsByClassName(A.tellAmazonLink)[0])b=la.setup(),b.define(G.openTellAmazonModal,"click",function(){return c.__awaiter(void 0,void 0,void 0,function(){var d,e;return c.__generator(this,function(h){switch(h.label){case 0:return d=F["default"].cardRoot.getElementsByClassName(A.tellAmazonDiv)[0],e=""+d.dataset.marketplace,[4,L.getStrings({})];case 1:return ia=h.sent(),Sa(),Ca=e===Y.US?Ia:Ha,[4,M.show()];case 2:return h.sent(),[2]}})})}),b.attach(G.openTellAmazonModal,
a);return[2]})})}});
