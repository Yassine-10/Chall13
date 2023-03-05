package dg.digency.back.dao;

import dg.digency.back.entities.Citizen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CitizenRepository extends JpaRepository<Citizen,Long> {
    Optional<Citizen> findByCin(String cin);

}
