<template>
  <div class="contact lightBG">
      <div class="text-center my-8 pt-12">
          <div class="font-x2b">Contact</div>
          <div>Any question or remarks? Just write us a message</div>
      </div>

      <div class="form-section">
        <v-container class="borderTest white radius20 pa-4">
            <v-row>
                <v-col cols="12" sm="5" class="primary py-12 px-8 radius20 d-flex flex-column justify-space-between">
                    <div>
                        <h3 class="font-x3b">
                            Contact us
                        </h3>

                        <div>Fill up the form and our Team will get back to you within 24 hours.</div>
                    </div>

                    <social-icons class="contact-social" />
                </v-col>

                <v-col cols="12" sm="7" class="px-10">
                    <v-form id="contact-form" ref="contactForm">
                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-text-field
                                    v-model="firstName"
                                    :rules="[rules.required]"
                                    label="First Name"
                                    hide-details="auto"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6">
                                <v-text-field
                                    v-model="lastName"
                                    :rules="[rules.required]"
                                    label="Last Name"
                                    hide-details="auto"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6">
                                <v-text-field
                                    v-model="email"
                                    :rules="[rules.required, rules.email]"
                                    label="Your Email"
                                    hide-details="auto"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6">
                                <v-text-field
                                    v-model="phone"
                                    :rules="[rules.required, rules.phoneNumber]"
                                    label="Phone No."
                                    hide-details="auto"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-select
                                    v-model="reason"
                                    :rules="[rules.required]"
                                    label="Contact Reason"
                                    item-text="title"
                                    item-value="value"
                                    :items="reasons"
                                    :menu-props="{offsetY: true}"
                                    hide-details="auto"
                                ></v-select>
                            </v-col>

                            <v-col cols="12">
                            <v-textarea
                                v-model="message"
                                :rules="[rules.required]"
                                label="Message"
                                height="150"
                                hide-details="auto"
                            ></v-textarea>
                            </v-col>

                            <v-col cols="4">
                                <div class="captcha">
                                    <v-text-field
                                        v-model="digit1"
                                        disabled
                                        outlined
                                        class="captcha_input"
                                        hide-details=""
                                    ></v-text-field>

                                    <span class="mx-2">+</span>

                                    <v-text-field
                                        v-model="digit2"
                                        disabled
                                        outlined
                                        class="captcha_input"
                                        hide-details
                                    ></v-text-field>

                                    <span class="mx-2">=</span>

                                    <v-text-field
                                        v-model.number="answer"
                                        outlined
                                        class="captcha_input"
                                        hide-details
                                    ></v-text-field>
                                </div>

                                <div v-if="captchaError" class="red--text mt-3">
                                    <b class="font-sm">{{ captchaErrorMsg }}</b>
                                </div>
                            </v-col>

                            <v-col cols="12">
                                <v-btn
                                    @click="submitContact"
                                    :loading="sendLoader"
                                    class="my-4"
                                    label="Submit"
                                    color="primary"
                                    height="50"
                                    width="100%"
                                >
                                    <span>Submit</span>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
      </div>

      <v-snackbar 
        v-model="snackbar.status"
        top 
        right 
        :color="snackbar.color"
        height="60"
      >
        {{ snackbar.text }}
      </v-snackbar>
    </div>
</template>

<script>
import SocialIcons from '../components/socialIcons';
export default {
  components: {
    SocialIcons
  },
  data() {
    return {
      sendLoader: false,
      digit1: null,
      digit2: null,
      answer: null,
      expected_answer: 0,
      captchaError: false,
      captchaErrorMsg: "Captcha failed. Try Again ",
      snackbar: {
        status: false,
        text: "",
        color: "",
      },
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      reason: "",
      message: "",
      messageFailed: false,
      messageSuccess: false,
      rules: {
        required: value => !!value || "Required.",
        min8: value => value.length >= 8 || "Min 8 characters",
        password: value => {
          const pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
          return (
            pattern.test(value) ||
            "Min. 8 characters with at least one capital letter, a number and a special character."
          );
        },
        phoneNumber: value =>
          !value ||
          /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(value) ||
          "Enter a valid phone number",
        number: value => !value || /^[0-9]*$/.test(value) || "Invalid digit",
        email: value =>
          !value ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
          "Invalid E-mail"
      }
    };
  },
  computed: {
    reasons() {
        const reasons = [
                {
                    title: "General",
                    value: "general"
                },
                {
                    title: "Vacancy",
                    value: "vacancy"
                },
                {
                    title: "Car Import",
                    value: "carImport"
                },
                {
                    title: "Procure Electric Vehicle",
                    value: "ev"
                },
            ]
        return reasons
    },
    reasoner() {
        return this.$route.params
    }
  },
  methods: {
    async submitContact() {
        const valid = this.$refs.contactForm.validate()
        const validCaptcha = this.answer === this.expected_answer

        if (!validCaptcha) {
            this.captchaError = true
            this.answer = null

            // re-generate captcha
            return this.generateCaptcha()
        } else {
            this.captchaError = false
        }

        if (valid && validCaptcha) {
            this.sendLoader = true;

            const data = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                phone: this.phone,
                reason: this.reason,
                message: this.message
            };

            await this.$store.dispatch("api/submitContact", data).then(() => {
                this.sendLoader = false
                this.snackbar.color = "green";
                this.snackbar.text = "Your contact has been successfully submitted";

                this.$refs.contactForm.reset()
            }).catch(() => {
                this.snackbar.color = "red";
                this.snackbar.text = "There was a problem with your submission";
            }).finally(() => {
                this.snackbar.status = true;
                this.sendFinished = true;
                this.sendLoader = false
            })
        }
    },
    generateCaptcha() {
        function randomize() {
            let num = Math.floor(Math.random() * 20)

            return num
        }

        this.digit1 = randomize()
        this.digit2 = randomize()

        this.expected_answer = this.digit1 + this.digit2
    }
  },
  created() {
    //   generate simple math captcha
    this.generateCaptcha()

    const { reason } = this.$route.params
    this.reason = reason || ""
  }
};
</script>


<style lang="scss" scoped>
.form-section {
    margin: 100px 0;
}

.captcha {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &_input {
        width: 33px;
        height: 33px;
        padding: 0;
        font-weight: bold;

        ::v-deep .v-input__slot {
            min-height: auto !important;
        }
    }
}
.contact-social {
    margin-top: 40px;
}
@media (max-width: 960px) {
    .__wrapper {
        width: 100%;
    }
}
</style>
