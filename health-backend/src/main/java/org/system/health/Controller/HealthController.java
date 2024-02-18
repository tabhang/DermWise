package org.system.health.Controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.system.health.Entity.Diagnosis;
import org.system.health.Model.SymptomsRequest;

@RestController
public class HealthController {


    @PostMapping("/api/diagnose")
    public Diagnosis getDiagnosis(@RequestBody SymptomsRequest symptomsRequest)
    {
        return null;
    }


}
