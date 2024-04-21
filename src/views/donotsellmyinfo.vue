<template>
	<div class="privacy-policy">
		<page-hero
			:carImg="hero.carImg"
			:intro="hero.intro"
			:title="hero.title"
			:subtitle="hero.subtitle"
			:cta="hero.cta"
			:ctaAction="hero.ctaAction"
		/>

		<v-container>
			<section>
				<h1>DO NOT SELL OR SHARE MY PERSONAL INFORMATION</h1><br>

				<p>At Hermes Autos, we value your privacy and prioritize your trust. We are
				dedicated to offering you meaningful choices concerning the data we
				gather from or about you. As of June 12, 2023, the Nigeria Data
				Protection Act, 2023 (the Act) grants Nigerian residents specific rights
				regarding their personal data, including among many, the ability to opt
				out of certain disclosures of personal information, as elaborated below.</p>
				
				<p>Hermes Autos gathers information, including personal data (as defined by
				the Act) , when you utilize our services, as detailed in our Privacy
				Notice. If you are a registered user of our services, we may reveal
				certain collected information for purposes that could be categorized as
				a "sale" under the Act. For instance, we might disclose data to
				advertising partners, advertising technology firms, and entities
				providing advertising-related services to deliver more tailored
				advertising to you on our services. This aids in customizing your
				experience and the content you encounter on our platform, as outlined
				further in our Privacy Notice. </p>
                <p>Under the Act, you possess the right to
				request a report, opt out of the "sale," and request deletion of your
				personal data. We extend this right, contingent upon a verifiable
				consumer request, to account holders concerning personal information
				gathered in connection with your account, including any profiles. You
				can exercise this right whenever you click the “Do Not Sell or Share My
				Personal Information” (hyperlink to be provided) link provided at the
				bottom of our website pages, and in our app. You will need to
				authenticate your request using your Legal Templates account credentials
				and/or other verification methods. </p>
                <p>If you are not a registered user of
				our services, we possess minimal information about you and do not engage
				in "selling" your data as delineated above. For inquiries about Hermes
				Autos data sharing practices, you can review our Privacy Policy, here.</p>
			</section>
		</v-container>
	</div>
</template>

<script>
	import pageHero from "../components/pageHero";

	export default {
		components: {
			pageHero,
		},
		data() {
			return {
				hero: {
					carImg: require("../assets/img/gle-benz.png"),
					intro: "",
					title: "Rules of the Road",
					subtitle:
						"Hermes Autos's mission is to help you find your drive. Please make a pit stop here to learn more about the terms and policies that govern your use of our products and services.",
					cta: "Find Your Car",
					ctaAction: "https://shop.hermesautos.com",
				},
			};
		},
	};
</script>

<style scoped>
	section {
		padding: 40px 0;
	}
</style>
