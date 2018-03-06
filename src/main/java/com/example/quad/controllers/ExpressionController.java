/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.quad.controllers;

import com.example.quad.entities.Expression;
import com.example.quad.repositories.ExpressionRepository;
import java.util.List;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
/**
 *
 * @author User
 */
@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders = "*")
public class ExpressionController {
    
    @Autowired
    private ExpressionRepository expressionRepository;
    
    @GetMapping("/expressions")
    public List<Expression> getExpressions(){
        return expressionRepository.findAll();
    }
    
    @GetMapping("/expression/{id}")
    public Expression getExpression(@PathVariable Long id){
        return expressionRepository.findOne(id);
    }
    
    @PostMapping("/expression")
    public Expression createExpression(@RequestBody Expression expression){
        return expressionRepository.save(expression);
    }
    
}
