package com.araxaprojetosweb.backend.controllers.multfiles;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Optional;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.araxaprojetosweb.backend.entities.dto.FormWrapper;

@RestController
@RequestMapping("/files")
public class UploadFiles {
	
	final String UPLOAD_FOLDER = "Files-Uploads//";

	@GetMapping(path = "/paint/{strPath}")
	public ResponseEntity<InputStreamResource> getImageDynamicType(@PathVariable String strPath, @RequestParam Optional<Boolean> jpg){
		Path path = Paths.get("Files-Uploads//" + strPath);
	    MediaType contentType = jpg.orElseGet(() -> false) ? MediaType.IMAGE_JPEG : MediaType.IMAGE_PNG;
		byte[] bytesArquivo;
		InputStream is = null;
		try {
			bytesArquivo = Files.readAllBytes(path);
			is = new ByteArrayInputStream(bytesArquivo);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			return null;
		}
        return ResponseEntity.ok()
      	      .contentType(contentType)
      	      .body(new InputStreamResource(is));
	}
	
	@PostMapping(path = "/upload1", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE }) // "multipart/form-data"
	public ResponseEntity<?> fileout(@RequestParam("file") MultipartFile file) {
		if (file.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		try {
			byte[] bytes = file.getBytes();
			Path path = Paths.get(UPLOAD_FOLDER + file.getOriginalFilename());
			Files.write(path, bytes);
			System.out.println(Arrays.toString(bytes));

		} catch (IOException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		return ResponseEntity.ok().body("File Uploaded sucessfully");
	}
	
	@PostMapping(path = "/upload2", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
	public ResponseEntity<?> multiUploadFileModel(@ModelAttribute FormWrapper model) {
		try {
	        // Save as you want as per requiremens
	        saveUploadedFile(model.getImage());
	        //formRepo.save(model.getTitle(), model.getDescription());
	    } catch (IOException e) {
	        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	    }

	    return new ResponseEntity("Successfully uploaded!", HttpStatus.OK);
	}
	private void saveUploadedFile(MultipartFile file) throws IOException {
	    if (!file.isEmpty()) {
	        byte[] bytes = file.getBytes();
	        Path path = Paths.get(UPLOAD_FOLDER + file.getOriginalFilename());
	        Files.write(path, bytes);
	    }
	}
<<<<<<< HEAD
}
=======
}
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
