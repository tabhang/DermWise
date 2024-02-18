package org.system.health.Service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ModelServiceImpl implements ModelService {

    public String predict(int[][] inputArray) {
        RestTemplate restTemplate = new RestTemplate();
        String url =   "http://127.0.0.1:5000/predict";
        return restTemplate.postForObject(url, inputArray, String.class);
    }
}
