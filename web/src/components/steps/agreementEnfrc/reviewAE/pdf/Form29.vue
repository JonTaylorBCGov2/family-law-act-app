<template>
<div v-if="dataReady">    
 
    <b-card id="print" style="border:1px solid; border-radius:5px;" bg-variant="white" class="mt-4 mb-4 container" no-body>
        <form-29-layout v-bind:result="result"/>
    </b-card>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import moment from 'moment';
import { namespace } from "vuex-class";   
import "@/store/modules/application";
const applicationState = namespace("Application");

import Form29Layout from "./Form29Layout.vue";

import {stepsAndPagesNumberInfoType} from "@/types/Application/StepsAndPages";
import { getEnforcementResultData } from '@/components/utils/PopulateForms/PopulateEnfrcInformation';

@Component({
    components:{        
        Form29Layout
    }
})

export default class Form29 extends Vue {

    @applicationState.State
    public stPgNo!: stepsAndPagesNumberInfoType;
    
    @applicationState.Action
    public UpdatePathwayCompleted!: (changedpathway) => void

    result;
    dataReady = false;
   
    mounted(){
        this.dataReady = false;
        this.result = this.getEnfrcResultData();
        this.dataReady = true;
        Vue.nextTick(()=> this.onPrint())
    }   
           
    public onPrint() { 
        const pdf_type = Vue.filter('getPathwayPdfType')("agreementEnfrc")
        const pdf_name = "application-about-enforcement"
        const el= document.getElementById("print");

        const applicationId = this.$store.state.Application.id;
        const bottomLeftText = `"PFA 725    `+moment().format("MM/YYYY")+` \\a           Form 29";`;
        const bottomRightText = `"Application About Enforcement | "`
        const url = '/survey-print/'+applicationId+'/?name=' + pdf_name + '&pdf_type='+pdf_type+'&version=1.0&noDownload=true'
        const pdfhtml = Vue.filter('printPdf')(el.innerHTML, bottomLeftText, bottomRightText );

        const body = {
            'html':pdfhtml,
            'json_data':this.result
        }       
        
        const options = {
            responseType: "blob",
            headers: {
            "Content-Type": "application/json",
            }
        }  

        this.$http.post(url,body, options)
        .then(res => {
            const currentDate = moment().format();
            this.$store.commit("Application/setLastPrinted", currentDate); 
            this.UpdatePathwayCompleted({pathway:"agreementEnfrc", isCompleted:true})
            this.$emit('enableNext',true)                   
        },err => {
            console.error(err);        
        });
    }
 
    public getEnfrcResultData() {         
        
        let result = Object.assign({},this.$store.state.Application.steps[0].result); 
        result = getEnforcementResultData(result, this.stPgNo.COMMON._StepNo, this.stPgNo.ENFRC._StepNo)

        Vue.filter('extractRequiredDocuments')(result, 'agreementEnfrc')

        return result;
    }
}
</script>
<style scoped lang="scss" src="@/styles/_pdf.scss">

</style>