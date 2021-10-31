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
                    <v-form id="contact-form" class="">
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
                            <v-textarea
                                v-model="message"
                                :rules="[rules.required]"
                                label="Your Details"
                                height="150"
                                hide-details="auto"
                            ></v-textarea>
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

    <!-- <v-container class="form-container">
        <v-container
            class="d-flex flex-column justify-center text-center"
            v-if="messageSuccess == true && messageFailed == false"
        >
            <v-icon size="250" color="accent">check_circle</v-icon>

            <h1>Message Sent</h1>
            <p class="my-5 that-green-color">
            Your message has been successfully sent. A member of our team would
            get in touch with you ASAP!
            </p>
        </v-container>
        <v-container
            class="d-flex flex-column justify-center text-center"
            v-if="messageFailed == true && messageSuccess == false"
        >
            <v-icon size="250" color="red">error</v-icon>

            <h1>Oops!</h1>
            <p class="my-5 that-green-color">
            We had an issue sending your message over. Please try again later.
            </p>
        </v-container>
        <v-container v-if="messageSuccess == false && messageFailed == false">
            <v-row class="justify-center">
            <v-col cols="11" sm="8" md="6">
                <v-form id="contact-form" class="that-green-color">
                    <v-row>
                        <v-col cols="12" sm="12">
                        <v-text-field
                            v-model="fullName"
                            :rules="[rules.required]"
                            class="my-4"
                            label="Your Name"
                            height="40"
                            outlined
                        ></v-text-field>
                        <v-text-field
                            v-model="email"
                            class="my-4"
                            :rules="[rules.required, rules.email]"
                            label="Your Email"
                            height="40"
                            outlined
                        ></v-text-field>
                        <v-text-field
                            v-model="phone"
                            class="my-4"
                            :rules="[rules.required, rules.phoneNumber]"
                            label="Phone No."
                            height="40"
                            outlined
                        ></v-text-field>
                        <v-textarea
                            v-model="message"
                            :rules="[rules.required]"
                            class="my-4"
                            label="Your Details"
                            height="150"
                            outlined
                        ></v-textarea>
                        <v-btn
                            @click="submitContact"
                            :loading="sendLoader"
                            class="my-4"
                            label="Submit"
                            color="accent"
                            height="50"
                            width="100%"
                        >
                            <span class="text-capitalize neueplak-regular"
                            >Submit</span
                            >
                        </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
            </v-row>
        </v-container>
    </v-container> -->
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
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      details: "",
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
  methods: {
    submitContact() {
      this.sendLoader = true;
      const body = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        message: this.message
      };
      console.log(body);
    //   axios
    //     .post("/api/v1/contact", body)
    //     .then(response => {
    //       this.messageSuccess = true;

    //       console.log(response.data);
    //       console.log(response.headers);
    //       console.log(response.status);

    //       this.sendLoader = false;
    //     })
    //     .catch(error => {
    //       this.messageFailed = true;

    //       console.log(error);
    //       console.log(error.response);

    //       this.sendLoader = false;
    //     });
    }
  },
};
</script>


<style lang="scss" scoped>
.form-section {
    margin: 100px 0;
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
