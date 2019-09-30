package pl.mgrusz.postit.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.mgrusz.postit.model.entities.Note;
import pl.mgrusz.postit.model.repository.NoteRepository;

@RestController
@RequestMapping("/notes")
@CrossOrigin
public class NoteController {
	
	@Autowired
	private NoteRepository noteRepository;
	
		
	@GetMapping("/all")
	public List<Note> getAllNotes() {
		List<Note> notes = new ArrayList<Note>();
		notes.addAll(noteRepository.findAll());
		return notes;
	}
	
	@PutMapping
	public Note updateNote(@RequestBody Note note) {
		note.setModifDate(new Date());
		return noteRepository.save(note);
	}
	
	@PostMapping
	public Note createNote(@RequestBody Note note){
		note.setModifDate(new Date());
		return noteRepository.save(note);
	}
	
	
	@DeleteMapping("{id}")
	public void deleteNote(@PathVariable Long id) {
		noteRepository.deleteById(id);
	}
}
