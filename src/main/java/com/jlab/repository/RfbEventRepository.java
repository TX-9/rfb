package com.jlab.repository;

import com.jlab.domain.RfbEvent;
import com.jlab.domain.RfbLocation;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;


/**
 * Spring Data  repository for the RfbEvent entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RfbEventRepository extends JpaRepository<RfbEvent, Long> {
    RfbEvent findByRfbLocationAndEventDate(RfbLocation location, LocalDate date);

}
