import { ApplicationState, RootState } from "@/models/storeState";
import Vue from "vue";
import Vuex, { Store, StoreOptions } from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    surveyIndex: Number,
    surveyArray: Array,
    allCompleted: false,
    userType: "",
  },
  getters: {
    surveyIndex: (state) => state.surveyIndex,
    surveyArray: (state) => state.surveyArray,
    allCompleted: (state) => state.allCompleted,
    userType: (state) => state.userType,
  },
  mutations: {
    setSurveyArray(state, surveyArray) {
      state.surveyArray = surveyArray;
    },
    setSurveyIndex(state, surveyIndex) {
      state.surveyIndex = surveyIndex;
    },
    setSurveyPageIndex(state, obj) {
      state.surveyArray[obj.surveyIndex].pageIndex = obj.pageIndex;
    },
    setSurveySelected(state, obj) {
      state.surveyArray[obj.surveyIndex].selected = obj.surveySelected;
    },
    setSurveyData(state, obj) {
      state.surveyArray[obj.surveyIndex].data = obj.surveyData;
    },
    setSurveyCompleted(state, surveyIndex) {
      state.surveyArray[surveyIndex].completed = true;

      // also calculate the 'all completed' flag
      var allCompleted = true;
      var i;
      for (i = 1; i < state.surveyArray.length; i++) {
        if (state.surveyArray[i].selected && !state.surveyArray[i].completed) {
          allCompleted = false;
          break;
        }
      }
      state.allCompleted = allCompleted;
    },
    setSurveyIncomplete(state, surveyIndex) {
      state.surveyArray[surveyIndex].completed = false;
      state.allCompleted = false;
    },
    setUserType(state, userType) {
      state.userType = userType;
    },
  },
  actions: {
    setSurveyArray(context, surveyArray) {
      context.commit("setSurveyArray", surveyArray);
    },
    setSurveyIndex(context, surveyIndex) {
      context.commit("setSurveyIndex", surveyIndex);
    },
    setSurveyPageIndex(context, obj) {
      context.commit("setSurveyPageIndex", obj);
    },
    setSurveySelected(context, obj) {
      context.commit("setSurveySelected", obj);
    },
    setSurveyData(context, obj) {
      context.commit("setSurveyData", obj);
    },
    setSurveyCompleted(context, surveyIndex) {
      context.commit("setSurveyCompleted", surveyIndex);
    },
    setSurveyIncomplete(context, surveyIndex) {
      context.commit("setSurveyIncomplete", surveyIndex);
    },
    setUserType(context, userType) {
      context.commit("setUserType", userType);
    },
  },
});
