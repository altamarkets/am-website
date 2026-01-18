<template>
  <section class="the-planet-section" id="the-planet-section">
    <div class="the-planet-section__container">
      <div class="the-planet-section__content">
        <h1 class="general-title the-planet-section__title">
          Institutional-Grade Digital Asset Markets Access
        </h1>

        <p class="the-planet-section__text">
          Access digital asset markets through secure, compliant and efficient provider
        </p>
      </div>

      <div class="the-planet-section__container-form" id="the-form-section__form">
        <h1 class="the-form-section__title">{{ title }}</h1>

        <v-form
          class="the-form-section__form"
          ref="form"
          :disabled="submitLoading"
        >
          <div class="the-form-section__form-fields">
            <div class="the-form-section__form-names">
              <v-text-field
                class="the-form-section--form__field the-form-section__form-name"
                label="First name"
                :counter="nameMaxLength"
                color="white"
                :rules="nameRules"
                :persistent-counter=true
                variant="outlined"
                v-model="name3"
              ></v-text-field>
            </div>

            <div class="the-form-section__form-last-names">
              <v-text-field
                class="the-form-section--form__field the-form-section__form-last-name"
                label="Last name"
                :counter="lastNameMaxLength"
                :rules="lastNameRules"
                :persistent-counter=true
                variant="outlined"
                v-model="lastName2"
              ></v-text-field>
            </div>

            <div class="the-form-section__form-emails">
              <v-text-field
                class="the-form-section--form__field the-form-section__form-email"
                label="E-mail"
                :counter="emailMaxLength"
                :rules="emailRules"
                :persistent-counter=true
                variant="outlined"
                v-model="email1"
              ></v-text-field>
            </div>

            <div class="the-form-section__form-phones">
              <v-text-field
                class="the-form-section--form__field the-form-section__form-phone"
                label="Phone"
                :rules="phoneRules"
                variant="outlined"
                v-model="phone1"
              ></v-text-field>
            </div>
          </div>

          <!-- <div class="the-form-section__service">
            <div
              class="the-form-section__service-title"
              :class="{
                'the-form-section__service-title--disabled': submitLoading,
              }"
            >
              Service:
            </div>
            <div class="the-form-section__service-checkbox-group">
              <div class="the-form-section__form-best-execution-checkboxes">
                <v-checkbox
                  class="the-form-section--form__checkbox the-form-section__form-best-execution-checkbox"
                  label="Best execution"
                  true-icon="mdi mdi-checkbox-outline"
                  type="checkbox"
                  v-model="bestExecutionCheckbox3"
                ></v-checkbox>
              </div>

              <div class="the-form-section__form-custom-execution-checkboxes">
                <v-checkbox
                  class="the-form-section--form__checkbox the-form-section__form-custom-execution-checkbox"
                  label="Custom execution"
                  type="checkbox"
                  true-icon="mdi mdi-checkbox-outline"
                  v-model="customExecutionCheckbox1"
                ></v-checkbox>
              </div>
            </div>
          </div> -->

          <div class="the-form-section__form-texts">
            <v-textarea
              class="the-form-section--form__textarea the-form-section__form-text"
              label="Message"
              :counter="textMaxLength"
              variant="outlined"
              :persistent-counter=true
              :no-resize=true
              v-model="text2"
            ></v-textarea>
          </div>

          <div class="the-form-section__form-btn-block">
            <div class="the-form-section__form-btns">
              <AppBtn
                class="the-form-section--form__btn the-form-section__form-btn"
                :loading="submitLoading"
                @mouseover="mouseover"
                @click="submit"
              >
                Send
              </AppBtn>
            </div>

            <div
              class="the-form-section__form-privacy"
              :class="{
                'the-form-section__service-title--disabled': submitLoading,
              }"
            >
              By clicking the «Send» button, you agree with the Privacy and
              Cookie Policy
            </div>
          </div>
        </v-form>
      </div>
    </div>
  </section>
</template>

<script async src="./ThePlanetSection.ts"/>
<style scoped lang="scss" src="./ThePlanetSection.scss"/>
