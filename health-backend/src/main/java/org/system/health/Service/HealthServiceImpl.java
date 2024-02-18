package org.system.health.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.system.health.Entity.Diagnosis;
import org.system.health.Entity.User;
import org.system.health.Repository.UserRepository;
import org.system.health.Model.SymptomsRequest;
import org.system.health.Util.SymptomWeightMapSingleton;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class HealthServiceImpl implements HealthService{

    @Autowired
    UserRepository userRepository;

    @Autowired
    ModelService modelService;

    @Override
    public Diagnosis getDiagnosis(SymptomsRequest symptomsRequest) {
        Optional<User> user = userRepository.findByUuid(symptomsRequest.getUuid());
        if (user.isEmpty()) {
            return null;
        }

        Map<String, Integer> symptomWeightMap  = SymptomWeightMapSingleton.getSymptomWeightMap();
        List<Integer> modelInput= new ArrayList<>();
        symptomsRequest.getSymptoms().forEach(symptom -> {
            modelInput.add(symptomWeightMap.get(symptom));
        });

        int zerosToAdd = 17 - modelInput.size();
        List<Integer> expandedList = new ArrayList<>(modelInput);
        for (int i = 0; i < zerosToAdd; i++) {
            expandedList.add(0);
        }

        int size = expandedList.size();
        int[][] intArray = new int[1][size];

        for (int i = 0; i < size; i++) {
            intArray[0][i] = expandedList.get(i);
        }
        String disease = modelService.predict(intArray);

        String symptomsString = String.join(",", symptomsRequest.getSymptoms());

        return null;
    }
}
