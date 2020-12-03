package com.product.profit;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.net.URL;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.ResponseEntity;
import org.springframework.util.Assert;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class ProductControllerTest {
	// bind the above RANDOM_PORT
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

//    @Test
//    public void getHome() throws Exception {
//
//        ResponseEntity<String> response = restTemplate.getForEntity(
//            new URL("http://localhost:" + port + "/").toString(), String.class);
//        assertEquals("Product Management System", response.getBody());
//
//    }
    
    @Test
    public void pproductsListTest() throws Exception {

        ResponseEntity<String> response = restTemplate.getForEntity(
            new URL("http://localhost:" + port + "/pproducts").toString(), String.class);
       Assert. notNull("Product Management System Purchase=Null", response.getBody());

    }
    
    @Test
    public void sproductsListTest() throws Exception {

        ResponseEntity<String> response = restTemplate.getForEntity(
            new URL("http://localhost:" + port + "/sproducts").toString(), String.class);
       Assert. notNull("Product Management System Sale=Null ", response.getBody());

    }

}





    
