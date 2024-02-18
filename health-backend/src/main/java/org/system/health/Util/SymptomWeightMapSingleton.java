package org.system.health.Util;

import lombok.Getter;

import java.util.HashMap;
import java.util.Map;

public class SymptomWeightMapSingleton {
    @Getter
    private static final Map<String, Integer> symptomWeightMap = loadmap();

    private SymptomWeightMapSingleton() {
        // Private constructor to prevent instantiation
    }

    private static Map<String, Integer> loadmap() {
        // Load the HashMap from the CSV or any other data source
        Map<String, Integer> map = new HashMap<>();
        map.put("itching", 1);
        map.put("skin_rash", 3);
        map.put("nodal_skin_eruptions", 4);
        map.put("continuous_sneezing", 4);
        map.put("shivering", 5);
        map.put("chills", 3);
        map.put("joint_pain", 3);
        map.put("stomach_pain", 5);
        map.put("acidity", 3);
        map.put("ulcers_on_tongue", 4);
        map.put("muscle_wasting", 3);
        map.put("vomiting", 5);
        map.put("burning_micturition", 6);
        map.put("spotting_urination", 6);
        map.put("fatigue", 4);
        map.put("weight_gain", 3);
        map.put("anxiety", 4);
        map.put("cold_hands_and_feets", 5);
        map.put("mood_swings", 3);
        map.put("weight_loss", 3);
        map.put("restlessness", 5);
        map.put("lethargy", 2);
        map.put("patches_in_throat", 6);
        map.put("irregular_sugar_level", 5);
        map.put("cough", 4);
        map.put("high_fever", 7);
        map.put("sunken_eyes", 3);
        map.put("breathlessness", 4);
        map.put("sweating", 3);
        map.put("dehydration", 4);
        map.put("indigestion", 5);
        map.put("headache", 3);
        map.put("yellowish_skin", 3);
        map.put("dark_urine", 4);
        map.put("nausea", 5);
        map.put("loss_of_appetite", 4);
        map.put("pain_behind_the_eyes", 4);
        map.put("back_pain", 3);
        map.put("constipation", 4);
        map.put("abdominal_pain", 4);
        map.put("diarrhoea", 6);
        map.put("mild_fever", 5);
        map.put("yellow_urine", 4);
        map.put("yellowing_of_eyes", 4);
        map.put("acute_liver_failure", 6);
        map.put("fluid_overload", 6);
        map.put("swelling_of_stomach", 7);
        map.put("swelled_lymph_nodes", 6);
        map.put("malaise", 6);
        map.put("blurred_and_distorted_vision", 5);
        map.put("phlegm", 5);
        map.put("throat_irritation", 4);
        map.put("redness_of_eyes", 5);
        map.put("sinus_pressure", 4);
        map.put("runny_nose", 5);
        map.put("congestion", 5);
        map.put("chest_pain", 7);
        map.put("weakness_in_limbs", 7);
        map.put("fast_heart_rate", 5);
        map.put("pain_during_bowel_movements", 5);
        map.put("pain_in_anal_region", 6);
        map.put("bloody_stool", 5);
        map.put("irritation_in_anus", 6);
        map.put("neck_pain", 5);
        map.put("dizziness", 4);
        map.put("cramps", 4);
        map.put("bruising", 4);
        map.put("obesity", 4);
        map.put("swollen_legs", 5);
        map.put("swollen_blood_vessels", 5);
        map.put("puffy_face_and_eyes", 5);
        map.put("enlarged_thyroid", 6);
        map.put("brittle_nails", 5);
        map.put("swollen_extremeties", 5);
        map.put("excessive_hunger", 4);
        map.put("extra_marital_contacts", 5);
        map.put("drying_and_tingling_lips", 4);
        map.put("slurred_speech", 4);
        map.put("knee_pain", 3);
        map.put("hip_joint_pain", 2);
        map.put("muscle_weakness", 2);
        map.put("stiff_neck", 4);
        map.put("swelling_joints", 5);
        map.put("movement_stiffness", 5);
        map.put("spinning_movements", 6);
        map.put("loss_of_balance", 4);
        map.put("unsteadiness", 4);
        map.put("weakness_of_one_body_side", 4);
        map.put("loss_of_smell", 3);
        map.put("bladder_discomfort", 4);
        map.put("foul_smell_ofurine", 5);
        map.put("continuous_feel_of_urine", 6);
        map.put("passage_of_gases", 5);
        map.put("internal_itching", 4);
        map.put("toxic_look_(typhos)", 5);
        map.put("depression", 3);
        map.put("irritability", 2);
        map.put("muscle_pain", 2);
        map.put("altered_sensorium", 2);
        map.put("red_spots_over_body", 3);
        map.put("belly_pain", 4);
        map.put("abnormal_menstruation", 6);
        map.put("dischromic_patches", 6);
        map.put("watering_from_eyes", 4);
        map.put("increased_appetite", 5);
        map.put("polyuria", 4);
        map.put("family_history", 5);
        map.put("mucoid_sputum", 4);
        map.put("rusty_sputum", 4);
        map.put("lack_of_concentration", 3);
        map.put("visual_disturbances", 3);
        map.put("receiving_blood_transfusion", 5);
        map.put("receiving_unsterile_injections", 2);
        map.put("coma", 7);
        map.put("stomach_bleeding", 6);
        map.put("distention_of_abdomen", 4);
        map.put("history_of_alcohol_consumption", 5);
        map.put("fluid_overload", 4);
        map.put("blood_in_sputum", 5);
        map.put("prominent_veins_on_calf", 6);
        map.put("palpitations", 4);
        map.put("painful_walking", 2);
        map.put("pus_filled_pimples", 2);
        map.put("blackheads", 2);
        map.put("scurring", 2);
        map.put("skin_peeling", 3);
        map.put("silver_like_dusting", 2);
        map.put("small_dents_in_nails", 2);
        map.put("inflammatory_nails", 2);
        map.put("blister", 4);
        map.put("red_sore_around_nose", 2);
        map.put("yellow_crust_ooze", 3);
        map.put("prognosis", 5);

        return map;
    }

}