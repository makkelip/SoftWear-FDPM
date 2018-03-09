/*
 * Copyright (C) 2018 Markus
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import java.io.Serializable;
import static java.lang.System.out;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

/**
 *
 * @author Markus
 */
@Entity
public class Color implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String pantone;
    private String hexColorValue;

    @ManyToMany(mappedBy = "colors")
    @JsonBackReference(value = "color-product-ref")
    private List<Product> products;

    @ManyToMany(mappedBy = "colors")
    @JsonBackReference(value = "color-project-ref")
    private List<Project> projects;

    //ADDS
    public void addProject(Project p) {
        if (!projects.contains(p)) {
            this.projects.add(p);
            p.addColor(this);
        }
    }

    public void addProduct(Product p) {
        if (!products.contains(p)) {
            this.products.add(p);
            p.addColor(this);
        }
    }
    
    //DELETES
    public void deleteProject(Project p) {
        if (p.getColors().contains(this)) {
            p.deleteColor(this);
        }
        projects.remove(p);
    }

    public void deleteProduct(Product p) {
        if (p.getColors().contains(this)) {
            p.deleteColor(this);
        }
        products.remove(p);
    }

    //GETTERS
    public List<Long> getProjectsID() {
        List<Long> ls = new ArrayList<>();
        for (Project p : projects) {
            ls.add(p.getId());
        }
        return ls;
    }

    public List<Long> getProductsID() {
        List<Long> ls = new ArrayList<>();
        for (Product p : products) {
            ls.add(p.getId());
        }
        return ls;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPantone() {
        return pantone;
    }

    public String getHexColorValue() {
        return hexColorValue;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public List<Product> getProducts() {
        return products;
    }

    //SETTERS
    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPantone(String pantone) {
        this.pantone = pantone;
    }

    public void setHexColorValue(String hexColorValue) {
        this.hexColorValue = hexColorValue;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Color)) {
            return false;
        }
        Color other = (Color) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "model.Color[ id=" + id + " ]";
    }
}
