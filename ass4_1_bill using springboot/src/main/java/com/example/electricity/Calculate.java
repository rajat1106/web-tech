package com.example.electricity;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.electricity.model.FormData;


@Controller
public class Calculate {

    @GetMapping("/home")
    public String index() {
        return "index";
    }

    @PostMapping("/calculate")
    public String calculate(@ModelAttribute FormData formData, Model model) {
        //some logic
        
        int units = Integer.parseInt(formData.getUnits());
        int cost = 0;

        if(units <= 50){
            cost += units*3.5;
        }else if(units <= 150){
            cost += 50*3.5;
            cost += (units-50)*4;
        }else if(units <= 250){
            cost += 50*3.5;
            cost += 100*4;
            cost += (units-150)*5.20;
        }else if(units >= 250){
            cost += 50*3.5;
            cost += 100*4;
            cost += 100*5.20;
            cost += (units-250)*6.5;
        }

        System.out.println(units);
        model.addAttribute("cost", cost);
        return "calculate";
    } 
}
