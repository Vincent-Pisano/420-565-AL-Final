package com.lacouf.al420565final.controller;

import static com.lacouf.al420565final.util.ClientFactory.getClients;

import com.lacouf.al420565final.model.Client;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("http://localhost:3000")
public class ClientController {

    public static final String MALE = "M";
    public static final String ONTARIO = "ON";

    public ClientController() { }

    @GetMapping("/getAll/clients")
    public List<Client> getAllClients() {
        return getClients();
    }

    @GetMapping("/getAll/men")
    public List<Client> getAllMen() {
        return getClients().stream()
                .filter(client -> MALE.equals(client.getGender()))
                .collect(Collectors.toList());
    }

    @GetMapping("/getAll/clients/from/ontario")
    public List<Client> getAllClientsFromOntario() {
        return getClients().stream()
                .filter(client -> ONTARIO.equals(client.getProvince()))
                .collect(Collectors.toList());
    }
}
