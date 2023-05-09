package com.arjuncodes.studentsystem.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String grno;
    private String cdm;
    private String cde;
    private String ccm;
    private String cce;
    private String wtm;
    private String wte;
    private String daam;
    private String daae;

    public Student() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGrno() {
        return grno;
    }

    public void setGrno(String grno) {
        this.grno = grno;
    }

    // Getter methods
    public String getCdm() {
        return cdm;
    }
    
    public String getCde() {
        return cde;
    }
    
    public String getCcm() {
        return ccm;
    }
    
    public String getCce() {
        return cce;
    }
    
    public String getWtm() {
        return wtm;
    }
    
    public String getWte() {
        return wte;
    }
    
    public String getDaam() {
        return daam;
    }
    
    public String getDaae() {
        return daae;
    }

    // Setter methods
    public void setCdm(String cdm) {
        this.cdm = cdm;
    }
    
    public void setCde(String cde) {
        this.cde = cde;
    }
    
    public void setCcm(String ccm) {
        this.ccm = ccm;
    }
    
    public void setCce(String cce) {
        this.cce = cce;
    }
    
    public void setWtm(String wtm) {
        this.wtm = wtm;
    }
    
    public void setWte(String wte) {
        this.wte = wte;
    }
    
    public void setDaam(String daam) {
        this.daam = daam;
    }
    
    public void setDaae(String daae) {
        this.daae = daae;
    }

}

