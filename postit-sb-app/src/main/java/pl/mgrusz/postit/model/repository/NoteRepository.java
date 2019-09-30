package pl.mgrusz.postit.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pl.mgrusz.postit.model.entities.Note;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long>{

}
