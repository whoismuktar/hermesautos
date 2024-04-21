<template>
  <div class="">
    <page-hero
      :carImg="hero.carImg"
      :intro="hero.intro"
      :title="hero.title"
      :subtitle="hero.subtitle"
      :cta="hero.cta"
      :ctaAction="hero.ctaAction"
    />

    <div class="py-10">
      <div class="font-x3 app-bold text-center mb-5">
        Frequently Asked Questions
      </div>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-expansion-panels accordion dark class="mb-10">
              <v-expansion-panel
                v-for="(faq, i) in faqData.slice(0, faqData.length/2)"
                :key="i"
                class="transparent"
              >
                <v-expansion-panel-header>
                  <span class="black--text app-bold font-x5">{{
                    faq.question
                  }}</span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="faq-answer">
                    <span class="black--text">{{ faq.answer }}</span>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>

          <v-col cols="12" sm="6">
            <v-expansion-panels accordion dark>
              <v-expansion-panel
                v-for="(faq, i) in faqData.slice(faqData.length/2, faqData.length)"
                :key="i"
                class="transparent"
              >
                <v-expansion-panel-header>
                  <span class="black--text app-bold font-x5">{{
                    faq.question
                  }}</span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="faq-answer">
                    <span class="black--text">{{ faq.answer }}</span>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </div>
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
        intro: "About Hermes Autos",
        title: "Get Your Next Car Delivered",
        subtitle: "Great Prices. Better Cars. Delivered to You.",
        cta: "Find Your Car",
        ctaAction: "",
      },
      faqData: [
        {
          question: "How does the buying process work?",
          answer:
            "The buying process involves selecting a vehicle, completing necessary paperwork, arranging financing (if applicable), and scheduling delivery or pickup.",
        },
        {
          question:
            "How long will it take Hermes Autos to process my down payment?",
          answer:
            "Down payment processing times may vary but are typically completed within a few business days.",
        },
        {
          question: "Is the deposit refundable?",
          answer:
            "Yes, deposits are refundable if the transaction does not proceed.",
        },
        {
          question: "How long will my deposit hold the vehicle?",
          answer:
            "Deposits hold the vehicle for a specified period, typically 7 days, allowing time for paperwork and finalization.",
        },
        {
          question: "Why do I have to pay a deposit?",
          answer:
            "Deposits secure the vehicle and initiate the purchase process.",
        },
        {
          question: "When does the 7-day return period begin?",
          answer:
            "The 7-day return period begins upon delivery or pickup of the vehicle.",
        },
        {
          question:
            "What if I drive more miles than the 250 miles Hermes Autos allows?",
          answer:
            "Additional mileage may incur charges, depending on the terms of the purchase agreement.",
        },
        {
          question:
            "Can I exchange my car for a different Hermes Autos vehicle?",
          answer:
            "Exchange options may be available depending on specific circumstances. Please contact us for assistance.",
        },
        {
          question:
            "If I decide to return the car, do you charge a pickup fee?",
          answer:
            "Pickup fees may apply in some cases. Please refer to your purchase agreement or contact us for details.",
        },
        {
          question: "If I return my car, will Hermes Autos pay for shipping?",
          answer:
            "Shipping costs for returned vehicles may vary. Please contact us for further information.",
        },
        {
          question: "How will you be sending the contract?",
          answer:
            "Contracts are typically sent electronically for your convenience.",
        },
        {
          question:
            "Why am I receiving an error message when uploading documents?",
          answer:
            "Error messages may occur due to various reasons. Please ensure documents meet specified requirements or contact us for assistance.",
        },
        {
          question: "How long will it take for you to send me my contract?",
          answer:
            "Contract processing times vary but are typically completed within a few business days.",
        },
        {
          question: "Do I need to request insurance for my new car?",
          answer:
            "Yes, insurance is required for all purchased vehicles. Please arrange coverage before taking possession.",
        },
        {
          question:
            "Can I pay the negative equity directly to my lender instead of Hermes Autos?",
          answer:
            "Payment arrangements may vary. Please contact us to discuss your options.",
        },
        {
          question: "When do I get paid for my car?",
          answer:
            "Payment for sold vehicles is typically issued after all necessary paperwork is completed and verified.",
        },
        {
          question:
            "What is the payoff amount for the auto loan on the vehicle I want to sell (or trade-in)?",
          answer:
            "The payoff amount can be obtained from your lender. Please contact them directly for this information.",
        },
        {
          question:
            "Do I continue to make a car payment to my lender even after I have signed the contract to sell my car to Hermes Autos?",
          answer:
            "Yes, continue making payments until the sale is finalized and your lender confirms payoff.",
        },
        {
          question: "Will Hermes Autos buy any car?",
          answer:
            "Hermes Autos considers most makes and models for purchase. Please submit your vehicle for appraisal for confirmation.",
        },
        {
          question: "Can I sell my car without buying a car from Hermes Autos?",
          answer:
            "Yes, Hermes Autos offers vehicle purchasing services independent of vehicle sales. Contact us for more information.",
        },
        {
          question:
            "Will the appraisal price Hermes Autos provided for my car change?",
          answer:
            "The appraisal price provided by Hermes Autos is valid for a specific period, typically 7 days, but may be subject to change based on factors such as vehicle condition and market fluctuations.",
        },
        {
          question: "How long is the appraisal price good for?",
          answer:
            "The appraisal price provided by Hermes Autos is typically valid for 7 days from the date of the  appraisal.",
        },
        {
          question: "How do I sell my car to Hermes Autos?",
          answer:
            "To sell your car to Hermes Autos, you can start by getting an appraisal online, then complete the necessary paperwork and arrange for vehicle pickup or drop-off.",
        },
        {
          question: "What do I do with the title for my trade-in?",
          answer:
            "You will need to transfer the title to Hermes Autos upon completion of the sale. Instructions for this process will be provided.",
        },
        {
          question:
            "Why do I have to send Hermes Autos my title before they pick up the car?",
          answer:
            "Sending the title in advance helps expedite the sale process and ensures all necessary paperwork is in order before vehicle pickup.",
        },
        {
          question: "What if the title is not under my name?",
          answer:
            "If the title is not in your name, additional steps may be required to complete the sale. Please contact us for assistance.",
        },
        {
          question: "What if I don't have my title?",
          answer:
            "If you don't have your title, you may need to obtain a replacement or take additional steps to complete the sale. Contact us for guidance.",
        },

        {
          question: "Which banks does Hermes Autos work with?",
          answer:
            "Hermes Autos works with a variety of banks and lending partners to offer financing options to customers.",
        },
        {
          question:
            "If I have bad credit, can I still finance my purchase through Hermes Autos?",
          answer:
            "Hermes Autos offers financing options for a range of credit profiles, including those with less-than-perfect credit.",
        },
        {
          question:
            "I have filed for bankruptcy. Can I apply for Hermes Autos financing?",
          answer:
            "Hermes Autos considers financing applications from individuals who have filed for bankruptcy. Contact us for more information.",
        },
        {
          question: "Can I use a co-buyer?",
          answer:
            "Yes, you may use a co-buyer to apply for financing through Hermes Autos.",
        },
        {
          question:
            "If I find better financing after my purchase, can I pay off the loan Hermes Autos facilitated and use the other partner?",
          answer:
            "Yes, you can pay off the loan facilitated by Hermes Autos and refinance with another lender if desired.",
        },
        {
          question: "What forms of payment does Hermes Autos accept?",
          answer:
            "Hermes Autos accepts various forms of payment, including credit/debit cards, electronic bank transfers, and financing through approved lenders.",
        },
        {
          question:
            "I made a loan payment, and it impacted the payoff. What happens next?",
          answer:
            "Any loan payments made after initiating the sale process will be factored into the final payoff amount.",
        },
        {
          question: "When is my down payment due?",
          answer:
            "The timing of the down payment depends on the specifics of your purchase agreement. Please refer to your contract for details.",
        },
        {
          question:
            "Can I pay more than the required amount for my monthly payment?",
          answer:
            "Yes, you can make additional payments towards your loan to pay it off more quickly.",
        },
        {
          question:
            "If I finance through Hermes Autos, what are my options for making payments?",
          answer:
            "Hermes Autos offers various payment options, including online payments, automatic withdrawals, and payments by mail.",
        },
        {
          question: "Do I need to finance through Hermes Autos?",
          answer:
            "Financing through Hermes Autos is optional. You can choose to finance through Hermes Autos or arrange financing independently.",
        },
        {
          question:
            "I am financing this purchase through a non-Hermes Autos finance partner. What do you need from me?",
          answer:
            "Please provide any necessary documentation requested by your finance partner to complete the purchase process.",
        },
        {
          question: "When will my car be delivered?",
          answer:
            "Delivery times may vary depending on factors such as location and vehicle availability. You will be provided with an estimated delivery date upon completion of the purchase process.",
        },
        {
          question: "What is a Bill of Sale (BOS) and when will I receive it?",
          answer:
            "A Bill of Sale (BOS) is a legal document that records the sale of a vehicle and outlines the terms of the transaction. You will typically receive the BOS upon completion of the purchase process.",
        },
        {
          question: "Why wasn’t the gas tank full at delivery?",
          answer:
            "While we strive to deliver vehicles with a full tank of gas, variations may occur due to logistical reasons. We apologize for any inconvenience and encourage you to reach out if you have concerns.",
        },
        {
          question:
            "Will my car come with my titling and registration documents?",
          answer:
            "Yes, your car will come with titling and registration documents necessary for legal ownership. These documents will be provided to you upon delivery or pickup of the vehicle.",
        },
        {
          question: "What do I need to provide at delivery?",
          answer:
            "You will need to provide a valid driver's license and any required payment or paperwork as outlined in your purchase agreement.",
        },
        {
          question: "When will you pick up the car I am selling to you?",
          answer:
            "The timing of vehicle pickup will be arranged with you directly once the sale process is initiated and all necessary paperwork is completed.",
        },
        {
          question:
            "What documents do I need to send to Hermes Autos before they pick up my car?",
          answer:
            "You may need to provide various documents, including the title, registration, and any relevant maintenance records. Specific requirements will be communicated to you.",
        },
        {
          question:
            "Do I remove my license plates before the car is picked up?",
          answer:
            "Yes, you should remove your license plates before the vehicle is picked up, unless otherwise instructed.",
        },
        {
          question: "Can I add blackout dates for the pick-up?",
          answer:
            "Yes, you may be able to request blackout dates for vehicle pick-up. Please contact us to discuss your preferences.",
        },
        {
          question: "Can I change my pick up address?",
          answer:
            "Changes to the pick-up address may be possible depending on logistics and scheduling. Please contact us as soon as possible to make arrangements.",
        },
        {
          question:
            "What if I find cosmetic imperfections on my car that I didn't see highlighted on the Hermes Autos website?",
          answer:
            "We strive to provide accurate descriptions and images of all vehicles. If you encounter any discrepancies, please contact us to discuss your concerns.",
        },
        {
          question: "Does my vehicle have a manufacturer's warranty?",
          answer:
            "Some vehicles may still be covered by a manufacturer's warranty. Please refer to the vehicle listing or contact us for more information.",
        },
        {
          question:
            "What if my car still has a manufacturer's warranty, and I need repairs?",
          answer:
            "If your vehicle is still under manufacturer warranty, repairs may be covered by the warranty. Contact us for assistance with warranty claims and repairs.",
        },
        {
          question: "What is GAP coverage?",
          answer:
            "GAP (Guaranteed Asset Protection) coverage protects you from financial loss if your vehicle is totaled or stolen and the insurance settlement is less than the outstanding loan amount.",
        },
        {
          question: "Can I transfer GAP coverage?",
          answer:
            "Transferability of GAP coverage may vary. Please refer to your policy or contact us for assistance.",
        },
        {
          question:
            "How does Hermes Autos's 24/7 Roadside Assistance compare to AAA?",
          answer:
            "Hermes Autos's 24/7 Roadside Assistance offers similar services to AAA, including towing, lockout assistance, and flat tire repair. Contact us for specific coverage details.",
        },
        {
          question: "Do all Hermes Autos cars come with Roadside Assistance?",
          answer:
            "Roadside Assistance may be included with certain vehicle purchases. Please refer to your purchase agreement or contact us for confirmation.",
        },
        {
          question:
            "What is covered / not covered in the 90-day/6000 mile Limited Warranty?",
          answer:
            "The 90-day/6000 mile Limited Warranty covers certain mechanical and electrical components. Exclusions and limitations apply. Contact us for warranty details.",
        },
        {
          question:
            "What company administers Hermes AutosProtect and the 90-Day/6K-Mile Limited Warranty?",
          answer:
            "Hermes AutosProtect and the Limited Warranty are administered by third-party warranty providers. Contact us for provider information.",
        },
        {
          question: "Do all Hermes Autos cars come with a limited warranty?",
          answer:
            "Many Hermes Autos cars come with a limited warranty, but coverage may vary by vehicle. Contact us for warranty details specific to your purchase.",
        },
        {
          question: "How do I know if a car has an open safety recall?",
          answer:
            "You can check for open safety recalls by using the vehicle identification number (VIN) lookup tool provided by the National Highway Traffic Safety Administration (NHTSA) or contacting us for assistance.",
        },
        {
          question: "Does Hermes Autos fix unrepaired safety recalls?",
          answer:
            "Yes, Hermes Autos ensures that any unrepaired safety recalls are addressed before delivering the vehicle to you, ensuring your safety and compliance with regulations.",
        },
        {
          question: "What is a safety recall?",
          answer:
            "A safety recall is initiated by a vehicle manufacturer or the National Highway Traffic Safety Administration (NHTSA) when a defect or non-compliance with federal safety standards is found that could pose a risk to the safety of vehicle occupants or others on the road.",
        },
        {
          question:
            "What should I do if a car I want to buy has an open recall?",
          answer:
            "If a vehicle you are interested in purchasing has an open recall, Hermes Autos will ensure that the necessary repairs are made before delivery to ensure your safety and compliance.",
        },
        {
          question: "How will I know if a recall is issued in the future?",
          answer:
            "You will be notified by Hermes Autos if a recall is issued for your vehicle in the future. It's important to keep your contact information up to date to ensure you receive notifications.",
        },
        {
          question: "What is the Everyday Bundle?",
          answer:
            "The Everyday Bundle is a package offered by Hermes Autos that includes various protection plans and services to enhance your ownership experience, such as Hermes AutosProtect, roadside assistance, and warranty coverage.",
        },
        {
          question:
            "Can I purchase Hermes AutosProtect after I have purchased the car?",
          answer:
            "Yes, you may be able to purchase Hermes AutosProtect after you have purchased the car, depending on the specific terms and eligibility requirements. Contact us for more information.",
        },
        {
          question: "What is Hermes AutosProtect?",
          answer:
            "Hermes AutosProtect is a comprehensive protection plan offered by Hermes Autos that provides coverage for various components of your vehicle, including mechanical breakdowns, roadside assistance, and more.",
        },
        {
          question:
            "Can I cancel Hermes AutosProtect after I have purchased it?",
          answer:
            "Cancellation policies for Hermes AutosProtect may vary. Please refer to your contract or contact us for assistance with canceling or adjusting your coverage.",
        },
        {
          question: "What does Mechanical Protection Cover?",
          answer:
            "Mechanical Protection covers repairs to various mechanical components of your vehicle, providing added peace of mind against unexpected repair costs.",
        },
        {
          question: "What is Windshield Protection?",
          answer:
            "Windshield Protection covers the repair or replacement of your vehicle's windshield in the event of damage from road debris or other hazards.",
        },
        {
          question: "What is Key Protection?",
          answer:
            "Key Protection provides coverage for the repair or replacement of lost or damaged vehicle keys and key fobs.",
        },
        {
          question: "What is Dent Protection?",
          answer:
            "Dent Protection covers the repair of minor dents and dings on your vehicle's exterior panels, helping to maintain its appearance and resale value.",
        },
        {
          question:
            "Can I include the cost of Hermes AutosProtect in my monthly payments?",
          answer:
            "Financing options for Hermes AutosProtect may be available, allowing you to include the cost in your monthly payments. Contact us for more information.",
        },
        {
          question:
            "What company administers Vehicle Service Protection (VSP) product, Hermes AutosProtect?",
          answer:
            "Hermes AutosProtect is administered by reputable third-party warranty providers. Contact us for specific provider information.",
        },
        {
          question: "What is Tire & Wheel Protection?",
          answer:
            "Tire & Wheel Protection provides coverage for the repair or replacement of damaged tires and wheels due to road hazards.",
        },
        {
          question: "Does Hermes Autos offer any warranties or protections?",
          answer:
            "Yes, Hermes Autos offers various warranties and protection plans to provide peace of mind for your vehicle purchase. Contact us for details on available coverage options.",
        },
        {
          question: "What do I do if my temp tags are expiring?",
          answer:
            "If your temporary tags are expiring, please contact us as soon as possible so we can assist you with obtaining permanent registration and tags for your vehicle.",
        },
        {
          question: "What is a VIN Inspection and why do I need it?",
          answer:
            "A VIN inspection is a verification process conducted by a certified inspector to confirm the accuracy of the Vehicle Identification Number (VIN) on a vehicle. It may be required for various purposes, such as vehicle registration or title transfer.",
        },
        {
          question: "Where can I get a VIN Inspection?",
          answer:
            "VIN inspections can typically be conducted by authorized entities such as state motor vehicle departments, law enforcement agencies, or certified vehicle inspectors. Contact your local authorities or Hermes Autos for assistance in arranging a VIN inspection.",
        },
      ],
    };
  },
};
</script>
