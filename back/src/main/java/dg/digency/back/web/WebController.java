package dg.digency.back.web;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import dg.digency.back.dao.CitizenRepository;
import dg.digency.back.entities.Citizen;
import dg.digency.back.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

@RestController
@CrossOrigin("*")
public class WebController {
    @Autowired
    CitizenRepository citizenRepository;
    @Autowired
    ImageService imageService;
    @PostMapping(path="/citizens")
    public ResponseEntity<Citizen> createCitizen(@RequestParam("image") MultipartFile image,@RequestParam("data") String data) throws IOException {

        Citizen citizen=new ObjectMapper().readValue(data,Citizen.class);
        citizen.toString();
        citizen.setImage(imageService.compressBytes(image.getBytes()));
        Citizen savedCitizen = citizenRepository.save(citizen);
        return ResponseEntity.ok(savedCitizen);
    }



    @GetMapping(path="/citizens/{cin}")
    public ResponseEntity<Citizen> getCitizenByCin(@PathVariable(value = "cin") String cin)
    {
        Optional<Citizen> citizen = citizenRepository.findByCin(cin);
        citizen.get().setImage(imageService.decompressBytes(citizen.get().getImage()));
        return ResponseEntity.ok(citizen.get());
    }
}
