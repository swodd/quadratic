/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.quad.repositories;

import com.example.quad.entities.Expression;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author User
 */
public interface ExpressionRepository extends JpaRepository<Expression, Long>{

    public Expression findOne(Long id);
    
}
