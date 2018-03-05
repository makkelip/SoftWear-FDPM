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

import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.io.Serializable;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

/**
 *
 * @author Markus
 */
@Entity
public class Product implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    @ManyToOne
    @JsonManagedReference
    private ProductGroup productGroup;
    @ManyToOne
    @JsonManagedReference
    private PriceGroup priceGroup;
    @ManyToOne
    @JsonManagedReference
    private Customer customer;
    @ManyToOne
    @JsonManagedReference
    private Outfit outfit;
    @ManyToOne
    @JsonManagedReference
    private Project project;
    @ManyToMany
    @JsonManagedReference
    private List<Color> colors;
    @ManyToMany
    @JsonManagedReference
    private List<Material> materials;
    
    //GETTERS
    public Long getId() {
        return id;
    }
    
    public void addColor(Color e) {
       colors.add(e);
    }
    
     public void addMaterial(Material e) {
       materials.add(e);
    }

    public String getName() {
        return name;
    }

    public ProductGroup getProductGroup() {
        return productGroup;
    }

    public PriceGroup getPriceGroup() {
        return priceGroup;
    }

    public Customer getCustomer() {
        return customer;
    }

    public Outfit getOutfit() {
        return outfit;
    }

    public Project getProject() {
        return project;
    }

    public List<Color> getColors() {
        return colors;
    }

    public List<Material> getMaterials() {
        return materials;
    }
    
     //SETTERS
    public void setName(String name) {
        this.name = name;
    }

    public void setProductGroup(ProductGroup productGroup) {
        this.productGroup = productGroup;
    }

    public void setPriceGroup(PriceGroup priceGroup) {
        this.priceGroup = priceGroup;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public void setOutfit(Outfit outfit) {
        this.outfit = outfit;
    }

    public void setColors(List<Color> colors) {
        this.colors = colors;
    }

    public void setMaterials(List<Material> materials) {    
        this.materials = materials;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public void setId(Long id) {
        this.id = id;
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
        if (!(object instanceof Product)) {
            return false;
        }
        Product other = (Product) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "model.Product[ id=" + id + " ]";
    }
 
}
