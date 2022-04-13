/*!
*
* NYPD Cyber
* http://nypdcyber.netlify.com
*
*/

function nypdprocess() {

	$( "#nypdresults" ).show();
	$( "#nypdform" ).hide();

	/* This section pulls the form fields and controls displaying them on-screen after the submit button is pushed.*/
	$( "#nypd-category" ).html( $('#category').val() );
	$( "#nypd-contactmethod" ).html( $('#contactmethod').val() );	
	$( "#nypd-paymentmethod" ).html( $('#paymentmethod').val() );
	$( "#nypd-paymentcontactmethod" ).html( $('#paymentcontactmethod').val() );	

	/* This displays the JavaScript function to the page. */
        $.mobile.pageContainer.pagecontainer("change", "#nypdresults");

	/* This displays HTML code to the page. I need to make this condition based on the form input. */
	$( "div.category-info" )
		.html( "<p>category-info</p>" );

	$( "div.contactmethod-info" )
		.html( "<p>contactmethod-info</p>" );

	$( "div.paymentmethod-info" )
		.html( "<p>paymentmethod-info</p>" );

	$( "div.paymentcontactmethod-info" )
		.html( "<p>paymentcontactmethod-info</p>" );

	/* Displays a Back to Form button when the results are shown */

	$( "div.reloadform" )
		.html( "<p><a onclick='backtoform();' class='ui-btn ui-btn-inline'>Back to Form</a></p>" );

	$( "div.done" )
		.html( "<p><a href='done.html' class='ui-btn-c ui-btn ui-btn-inline'>Done</a></p>" );

	/* What is the category of the crime? Responses */

	if ($('#category').val() === "none") {
	$( "div.category-info" )
		.html( "<p><b><font color='red'>Please enter a category.</font></b></p>" );	
	}
		
	if ($('#category').val() === "scamwebpage") {
	$( "div.category-info" )
		.html( "<p><b>Scam Webpage or Financial Transaction</b></p><p>A fake website or webpage, or a social media post that offers to sell something that does not exist, or which the suspect does not own. This is also appropriate for social media impersonation - such as when someone impersonates a famous person in order to trick the victim into thinking he is giving money to a celebrity. Examples include incredibly good deals on used cars, apartments that are too good to be true (Two-bed, two-bath, hardwood floors, terrace, UWS $2300 month 1st/last/Sec); Yankees / Mets / Giants / Rangers / concert tickets, etc. Can also include Catfishing, a scam wherein a person creates a presence in social networks as a sock puppet or a fictional online persona for the purpose of luring someone into a relationship — usually a romantic one — in order to get money, gifts, or attention. Typically, the Complaining Victim will reply to the page, post, or message and be faced with a range of scams, from requests for PayPal/Venmo/Credit Card/Cash Card payment to in-person meetings for cash or checks.</p>" );	
	}

	if ($('#category').val() === "callfraudle") {
	$( "div.category-info" )
		.html( "<p><b>Call Fraud (Government)</b></p><p>This call fraud threatens the victim with governmental action: either arrest ('We have a warrant for your arrest, unless you pay...'), bail ('We have your grandson in jail at the 12 Precinct and you have to pay to get him released'), loss of benefits ('Your Social Security Account has been compromised and you must pay to restore benefits') or similar scams. Victims are most typically told to buy cash cards or to make Bitcoin payments through an ATM, though all other payment methods are used as well.</p>" );	
	}
	
	if ($('#category').val() === "callfraud") {
	$( "div.category-info" )
		.html( "<p><b>Call Fraud</b></p><p>The second type of call fraud is simply a scam run by phone. The setup is typically the same as Call Fraud (Government) except that the penalty is a loss of service ('I'm from ConEd, your account is overdue and we will shut off your power today at 5 pm unless you pay...'). In more serious scams, a 'tech support' representative will call and tell the victim that their computer is running slowly because it is infected with malware, and the suspect will request the victim grant remote access to their computer, the suspect will then gain access to the Complaining Victim's online banking and email accounts and drain funds.</p>" );	
	}

	if ($('#category').val() === "fraudemail") {
	$( "div.category-info" )
		.html( "<p><b>Fraud E-mail / Impersonation</b></p><p>Emails with spoofed return addresses or return addresses that are similar to those of the Complaining Victim (e.g., ROBERT.SMITH@nypd-police.org) that purport to be the Complaining Victim's boss, co-worker, or customer, making requests that the Complaining Victim wire money on behalf of a traveling boss ('Elaine, I'm traveling today and I need to wire transfer $6,500 to Bob. Can you please make the transfer? His account is...'), make changes to banking details ('This is ACME Vendor. We have changes our banking details. Please update your records: on ALL payments on ALL invoices, please use our new banking information...'), request the employee or family member buy gift cards ('Tina, I am traveling today and need to get some cash, can you please go to the Duane Reade at 5411 Myrtle Ave and get me $1000 in Michael Kors gift cards? You go to the front cashier and the cards are usually in a rack right there, just buy them and take photos of the back and email them to me here...'). These scams are sometimes referred to by the FBI designation Business Email Compromise, but the victim is often not a business.</p>" );	
	}

	if ($('#category').val() === "onlineextortion") {
	$( "div.category-info" )
		.html( "<p><b>Online Extortion</b></p><p>Online extortion can be a range of scams that prey on victims' embarrassment. Some are scams in which suspects use dating services or social media to trick a Complaining Victim into participating in a nude video chat, or expose genitals during a video chat, and then blackmail the Complaining Victim into paying to avoid release of the video. Some leverage the fact that so many data breaches have occurred that have breached passwords, and that most people reuse passwords, to scare people into paying. The scam goes something like, 'Oh, you've been very bad. I've seen your online porn and wow! Your password is 827shsd. I would hate for your wife and children to see what you've been watching. To avoid me telling them...' This is extortion.</p>" );	
	}			

	if ($('#category').val() === "physicalthreat") {
	$( "div.category-info" )
		.html( "<p><b>Physical Threat Extortion</b></p><p>Similar to Online Extortion, typically begins with contacts through social media, gaming sites, or dating sites and results in a threat of physical harm unless extortion is paid.</p>" );	
	}

	if ($('#category').val() === "accounttakeover") {
	$( "div.category-info" )
		.html( "<p><b>Account Takeover</b></p><p>This is not about hackers breaking into accounts, but rather to describe situations in which family members, friends, employees, or acquaintances gain access to a Complaining Victim's account credentials through access to papers, or intimate knowledge of the Complaining Victim's patterns, and access the Complaining Victim's banking or financial services accounts to transfer money.</p>" );	
	}

	if ($('#category').val() === "malewareredirect") {
	$( "div.category-info" )
		.html( "<p><b>Malware / Redirect Scam / SEO</b></p><p>Very similar in mechanics to the Call Fraud, Malware can force a popup on the Complaining Victim's computer or phone warning them that their device is infected. When the Complaining Victim clicks the link or calls the number, the suspects run a variant of the 'tech support scam' or similar - the suspect states the victim has an infected computer (or an expired iTunes account, or an expired Microsoft license) and the suspect will request either payment via a range of methods, usually Gift or cash cards, or remote access to their computer so that the suspect will then gain access to the Complaining Victim's online banking and email accounts and drain funds.  The Redirect Scam happens with malware or misleading online ads, links, or pages that direct Complaining Victim to a site that sets the Complaining Victim up for a variant of the scam. A SEO (it stands for Search Engine Optimization) scam bases an attack on using search terms to provide fake numbers higher in Google and Bing rankings, so someone who googles 'Phone slow' or 'iphone support' may get a non-official number that, when called, provides a variant of the same scam.</p>" );	
	}	

	if ($('#category').val() === "simswap") {
	$( "div.category-info" )
		.html( "<p><b>SIM-Swap</b></p><p>SIM-Swap is a growing concern. Malicious actors begin by gaining access to the victim's personal information from the publicly available information or the dark web, such as address, date of birth, or Social Security number, which provides them with the opportunity to deceive wireless carriers. Malicious actors then contact mobile providers, impersonating the victim to convince the customer service provider that a mobile number needs to be transferred to a new Subscriber Identity Module, or phone SIM card. By transferring the victim's account to the suspectetrator's SIM card, the suspect takes control of the mobile number. Once the malicious actor has control of the mobile number, he/she can intercept text, email, or phone call authentication messages from banks, credit cards, and email and social media accounts.<b>Instruct the victim to immediately contact their bank, their credit card companies, their online brokerage or retirement accounts, and their mobile phone provider.</b> Tell them to report to those services that they have lost control of their mobile phone account and to block their accounts from online transactions and transfers immediately.</p>" );	
	}	

	if ($('#category').val() === "allother") {
	$( "div.category-info" )
		.html( "<p><b>All other</b></p><p>For any cyber enabled crime category that does not fit, we use this catch-all. This can mean that it is a ind of scam that we have not thought of, or it could be a new scam type, or maybe even that you're just not sure how to categorize it. The best thing to do is note the payment methods and how the C/V was asked to transmit the money.</p>" );	
	}	


	/* How was the victim contacted? Responses */

	if ($('#contactmethod').val() === "none") {
	$( "div.contactmethod-info" )
		.html( "<p><b><font color='red'>Please enter a category method.</font></b></p>" );	
	}
		
	if ($('#contactmethod').val() === "mobilevoice") {
	$( "div.contactmethod-info" )
		.html( "<p><b>Mobile Phone - Voice Call</b></p><p><i>Victim reports: voice call to their mobile phone.</i></p><p>i. What was the number your phone says was calling you? This may be fake, but we need it.</p><p>ii. How did the suspect tell the Complaining Victim to return the information to pay (e.g., how should the Complaining Victim deliver the gift card or credit card number to the suspect)?</p><p>iii. If a phone number, WhatsApp account, email address, webpage, or other method, ask for it and add it to the report.</p>" );	
	}	

	if ($('#contactmethod').val() === "mobiletext") {
	$( "div.contactmethod-info" )
		.html( "<p><b>Mobile Phone - SMS / Text Message</b></p><p><i>Victim reports receiving a fraudulent SMS.</i></p><p>i. Get the Complaining Victim's mobile number and record the number the SMS supposedly came from (it may be fake, but it's important).</p><p>ii. Ask Complaining Victim to show you the SMS / text message they received, and copy it word for word into the into report narrative.</p><p>iii. Take a screenshot, or a photo with your phone.</p><p>iv. Click the link and copy the URL it takes you to into your report narrative. Ask CISD for help with this before clicking the link.</p><p>v. Ask for Complaining Victim's personal and work email addresses</p>" );	
	}	

	if ($('#contactmethod').val() === "mobileredirect") {
	$( "div.contactmethod-info" )
		.html( "<p><b>Mobile Phone - Voice / Internet: Redirect Scam</b></p><p><i>Victim reports they were tricked into calling a fake customer service number.</i></p><p>i. How did you find the phone number? Google/Search? What search terms did you use? Popup? On your phone or computer? What did the popup say (try to get the exact wording - this is sometimes hard)?</p><p>ii. What was the number the Complaining Victim called? Check their outgoing call history</p><p>iii. Check later for payment information to be sure we capture that</p>" );	
	}	

	if ($('#contactmethod').val() === "simswap") {
	$( "div.contactmethod-info" )
		.html( "<p><b>SIM-Swap (Mobile Phone Account Takeover)</b></p><p><i>Victim reports their mobile phone account was taken over.</i></p><p>i. NB: The attack may still be in progress against Complaining Victim's bank, brokerage, retirement, and other accounts. These can be devastating attacks</p><p>ii. Record the Complaining Victim's mobile phone number, the carrier name (AT&T, Verizon, etc.), their personal email addresses (Gmail, Yahoo!, Hotmail, etc.) </p><p>iii. Record the SIM card number on Complaining Victim's phone.</p><p>Android: Settings> About> Status (or Phone Identity)> IMEI Information> either 'IMSI' or 'ICCID' number.</p><p>iPhone: Settings> General> About> ICCID</p><p>iv. Ask the victim to log into their personal email, banking, and other accounts. If they're locked out, their account has been compromised. Call CISD for help advising Complaining Victim on next steps.</p>" );	
	}	

	if ($('#contactmethod').val() === "landline") {
	$( "div.contactmethod-info" )
		.html( "<p><b>Landline - Voice Call</b></p><p><i>Victim reports: voice call to their home or business landline phone.</i></p><p>i. What was the number your phone says was calling you (assuming the landline has Caller ID)? This may be fake, but we need it.</p><p>ii. How did the suspect tell the Complaining Victim to return the information to pay (e.g., how should the Complaining Victim deliver the gift card or credit card number to the suspect)?</p><p>iii. If a phone number, WhatsApp account, email address, webpage, or other method, ask for it and add it to the report.</p>" );	
	}	

	if ($('#contactmethod').val() === "webpage") {
	$( "div.contactmethod-info" )
		.html( "<p><b>Computer - Scam Webpage</b></p><p><i>Victim reports they went to a webpage and initiated a transaction that turned out to be a scam or fraud.</i></p><p>i. What was the URL of the webpage you visited that had the scam? This may be tough, but press them. Maybe ask them to navigate to the page to show you.</p><p>ii. Did you receive an email from the page owner? Did you get redirected to another page? What address?</p><p>iii. Was the payment instruction to pay by PayPal or some other online payment site? Which one? What URL?</p><p>iv. Did you get a receipt emailed to you? Do you have a copy of it? Ask Complaining Victim to forward the entire email to cisppilot@ncis.navy.mil and copy the header information later into 61. Ask CISD for help with this - we can extract the header for you and show you how we did it.</p>" );	
	}	

	if ($('#contactmethod').val() === "email") {
	$( "div.contactmethod-info" )
		.html( "<p><b>Email</b></p><p><i>Victim reports being tricked by a fake email pretending to be co-worker, customer, or friend.</i></p><p>i. Ask Complaining Victim to forward the entire email to cisppilot@ncis.navy.mil and copy the header information later into 61.</p><p>ii. State whether it was, for example, someone saying they were from ConEd. If the suspect stated they were with the police, what department (this is important to detect patterns).</p><p>iii. Was it a romance scam? Try to get a copy of the email (forward to cisppilot@ncis.navy.mil).</p><p>iv. We're reading the narratives, the details help us, they help the detectives, they help the prosecutors!</p>" );	
	}	

	if ($('#contactmethod').val() === "social") {
	$( "div.contactmethod-info" )
		.html( "<p><b>Social Media Site</b></p><p><i>Victim reports being scammed by someone they met on a social media network like Facebook, Instagram, Twitter, or similar.</i></p><p>i. Which social media site were you on when you were contacted?</p><p>ii. What is your username on that social media site?</p><p>iii. Is the suspect a friend of yours on this social media network? Have you ever spoken to him/her before?</p><p>iv. Were you private messaged by the suspect or was this a post you read and answered?</p><p>v. If it was other than a private message, ask how the person saw the post</p><p>vi. Get a URL of the post if you can and add it to your 61</p><p>vii. Did the suspect then contact you by other means, such as phone, text, or email?</p><p>viii. If so, follow the questions for those contact methods.</p>" );	
	}	

	/* How did the victim pay? Responses */

	if ($('#paymentmethod').val() === "none") {
	$( "div.paymentmethod-info" )
		.html( "<p><b><font color='red'>Please enter a payment method.</font></b></p>" );	
	}

	if ($('#paymentmethod').val() === "giftcard") {
	$( "div.paymentmethod-info" )
		.html( "<p><b>Cash / Gift or Stored Value Card</b></p><p>i. What kind of SVC?</p><p>ii. Did the suspect tell you the addresses of the stores where you were to buy them? </p><p>iii. What stores (name) and what addresses? Get each store name and address (best address possible) and write each location in the narrative field of the 61</p><p>iv. Did the suspect stay on the phone with you while you bought the cards?</p><p>v. How did you buy the SVC (cash, credit card?) If cash, where did you get it? Do you have a receipt for the SVC? Get the receipt number or take a photo of the receipt with your job phone and forward that photo in an email with the full name and DOB of the CV, to cisppilot@ncis.navy.mil.</p><p>vi. How did the suspect instruct you to provide the SVC serial numbers? Get the phone number, email address, website, or other means.</p><p>vii. If suspect told Complaining Victim to use FedEx, UPS, DHL, or overnight mail, call CISP for more information: PO Luis Sayan at (917) 863-9760, Director Nick Selby at (917) 328-9677, or email us at cisppilot@ncis.navy.mil.</p><p>viii. Ask the victim for the tracking number of the package, and write it down in the 61!</p><p>ix. Do you still have the SVC(s)? Get the numbers of each SVC, take a photo of all of them and forward that photo in an email with the full name and DOB of the CV, to cisppilot@ncis.navy.mil.</p><p>x. If you met the suspect to provide this to him, were they alone? Description of suspect, and clothing. Description of any accomplices, and clothing. Description of how suspect got there â€“ bus, subway, car, taxi/Lyft/Uber, CitiBike, etc.</p>" );	
	}	

	if ($('#paymentmethod').val() === "credit") {
	$( "div.paymentmethod-info" )
		.html( "<p><b>Credit Card</b></p><p>i. What credit card did you use? Get the number, name, expiration, and CVV2</p><p>ii. How did the suspect instruct you to provide the card numbers? Get the phone number, email address, website, or other means. Check outgoing messages to get a copy of the message, the time, date, and address it was sent to.</p>" );	
	}	

	if ($('#paymentmethod').val() === "onlineservice") {
	$( "div.paymentmethod-info" )
		.html( "<p><b>Online Service (PayPal, Venmo, etc.)</b></p><p>i. What service did you use? What is your account information for that service?</p><p>ii. To what username or phone number did you send the money?</p><p>iii. Can you access that service now and show me the receipt for the payment? Get a copy of that information; if it is emailable, or if you can photograph it, forward that email or photo in an email with the full name and DOB of the CV, to cisppilot@ncis.navy.mil.</p><p>iv. Do they have a credit card statement for the transaction? Email that in an email with the full name and DOB of the Complaining Victim to cisppilot@ncis.navy.mil.</p>" );	
	}	

	if ($('#paymentmethod').val() === "banktransfer") {
	$( "div.paymentmethod-info" )
		.html( "<p><b>Bank Transfer</b></p><p>Bank transfers often happen when the Complaining Victim's account was taken over through a fraud or SIM-Swap.</p><p>i. Get the Complaining Victim's bank name and account number.</p><p>ii. Get the suspect's bank name, routing number, and account number.</p><p>iii. Can you still log in to your bank account? Please do, and let's see the transaction.</p><p>iv. If you can email a receipt for the transaction to cisppilot@ncis.navy.mil, then copy the information into your report narrative.</p>" );	
	}	

	if ($('#paymentmethod').val() === "cryptocurrency") {
	$( "div.paymentmethod-info" )
		.html( "<p><b>Cryptocurrency (Bitcoin, Ethereum, Monero, etc.)</b></p><p>These are often used on call frauds like warrant and bail fraud, or ConEd account fraud.</p><p>i. What kind of cryptocurrency were you told to use?</p><p>ii. How were you told to transfer the crypto? If a Bitcoin ATM, get the street address of the ATM(s). Get the address of each ATM the Complaining Victim was sent to.</p><p>iii. If the suspect told the Complaining Victim to open an account at an online Exchange (e.g., Coinbase, Gemini, Paxos, Kraken, Binance) what exchange was it? Did they get a username for that exchange? What is it?" );	
	}	

	if ($('#paymentmethod').val() === "cash") {
	$( "div.paymentmethod-info" )
		.html( "<p><b>Cash</b></p><p>Typically used during in-person scams.</p><p>i. Where did you get the cash? Have you got an ATM/bank receipt?</p><p>ii. What were the bill denominations?</p><p>iii. If you met the suspect to provide this to him, were they alone? Description of suspect, and clothing. Description of any accomplices, and clothing. " );	
	}	

	if ($('#paymentmethod').val() === "check") {
	$( "div.paymentmethod-info" )
		.html( "<p><b>Check</b></p><p>Checks are often used in scams in which the suspect purports to buy something from the CV, then pays with a check far in excess of the amount, telling the Complaining Victim to deposit the large check in their bank account and send a check or other payment for the difference. It takes several days for the bank to realize the check is no good.</p><p>i. How did you pay the suspect? If we're lucky it was a check, and we aren't that lucky.</p><p>ii. See questions for all other payment methods after the check.</p><p>iii. If you met the suspect to provide this to him, were they alone? Description of suspect, and clothing. Description of any accomplices, and clothing. Description of how suspect got there â€“ bus, subway, car, taxi/Lyft/Uber, CitiBike, etc.</p>" );	
	}	

	if ($('#paymentmethod').val() === "na") {
	$( "div.paymentmethod-info" )
		.html( "<br>" );	
	}

	/* What contact method did the victim use to pay? Responses */

	if ($('#paymentcontactmethod').val() === "none") {
	$( "div.paymentcontactmethod-info" )
		.html( "<p><b><font color='red'>Please enter a payment contact method.</font></b></p>" );	
	}

	if ($('#paymentcontactmethod').val() === "none") {
	$( "div.paymentcontactmethod-info" )
		.html( "<p><b><font color='red'>Please enter a payment contact method.</font></b></p>" );	
	}
	
	if ($('#paymentcontactmethod').val() === "mobilevoice") {
	$( "div.paymentcontactmethod-info" )
		.html( "<p><b>Mobile Phone - Voice Call</b></p><p>i. What phone number did the suspect tell you to call?</p>" );	
	}	

	if ($('#paymentcontactmethod').val() === "mobiletext") {
	$( "div.paymentcontactmethod-info" )
		.html( "<p><b>Mobile Phone - SMS / Text Message</b></p><p>i. What phone number did the suspect tell you to text?</p>" );	
	}	
		
	if ($('#paymentcontactmethod').val() === "mobileapp") {
	$( "div.paymentcontactmethod-info" )
		.html( "<p><b>Mobile Phone - Telegram / WhatsApp / Other Chat App</b></p><p>i. What was the Username/handle/phone number associated with the chat account used by the suspect?</p>" );	
	}	
		
	if ($('#paymentcontactmethod').val() === "email") {
	$( "div.paymentcontactmethod-info" )
		.html( "<p><b>Email</b></p><p>i. To what email address did the suspect tell you to send mail?</p>" );	
	}	
		
	if ($('#paymentcontactmethod').val() === "website") {
	$( "div.paymentcontactmethod-info" )
		.html( "<p><b>Website</b></p><p>i. What was the full website address/URL (http://site.com/path/to/page)?</p>" );	
	}	

	if ($('#paymentcontactmethod').val() === "atm") {
	$( "div.paymentcontactmethod-info" )
		.html( "<p><b>ATM/Cypto Wallet Transfer</b></p><p>Cryptocurrency transfers can be executed wallet-to-wallet, through a Crypto exchange like Coinbase, itBit, etc., or from a Cryptocurrency ATM.</p><p>i. To what wallet address did you send the money? These are long and you should take a photo of it as well with your job phone if possible and forward that photo in an email with the full name and DOB of the CV, to cisppilot@ncis.navy.mil.</p><p>ii. Did you get a receipt? Copy the receipt information or take a photo of it</p>" );	
	}	

	if ($('#paymentcontactmethod').val() === "package") {
	$( "div.paymentcontactmethod-info" )
		.html( "<p><b>US Mail or express service (FedEx, UPS, etc.)</b></p><p>Sending payment through the postal mail or by an express service, such as FedEx, UPS, DHL, etc.</p><p>i. What service was used?</p><p>ii. Does the Complaining Victim have the airway bill or receipt and tracking number? Write it down or take a photograph with your job phone and email the photo to cisppilot@ncis.navy.mil</p><p>iii. Was the Complaining Victim given instructions as to how to mail the cash? What were they? To what address was the package sent?</p>" );	
	}	

	if ($('#paymentcontactmethod').val() === "na") {
	$( "div.paymentcontactmethod-info" )
		.html( "<br>" );	
	}

};
    
function backtoform() {
    	$( "#nypdform" ).show();	
	$( "#nypdresults" ).hide();
};    
