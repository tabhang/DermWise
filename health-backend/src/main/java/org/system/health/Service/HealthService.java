package org.system.health.Service;

import org.system.health.Entity.Diagnosis;
import org.system.health.Model.SymptomsRequest;

public interface HealthService {

    Diagnosis getDiagnosis(SymptomsRequest symptomsRequest);
}
