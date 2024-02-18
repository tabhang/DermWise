package org.system.health.Model;

import lombok.Data;

import java.util.List;

@Data
public class SymptomsRequest {

    private String uuid;

    private List<String> symptoms;
}
