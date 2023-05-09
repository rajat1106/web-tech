package com.example.electricity.model;

public class FormData {
    private String units;

    public String getUnits() {
        return units;
    }

    public void setUnits(String units){
        this.units = units;
    }

    @Override 
    public String toString(){
        return "units: " + units; 
    }
}
