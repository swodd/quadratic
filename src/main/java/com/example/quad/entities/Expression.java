/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.quad.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author User
 */

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Expression {
    
    @Id
    @GeneratedValue
    private Long id;
    
    private Float a;
    private Float b;
    private Float c;
    
    private Float d;
    
    private Float x1;
    private Float x2;
    
    
}
