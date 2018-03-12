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
package service;

import java.util.Iterator;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import model.Color;
import model.Customer;
import model.Material;
import model.Outfit;
import model.PriceGroup;
import model.Product;
import model.ProductGroup;
import model.Project;

/**
 *
 * @author Markus
 */
@Stateless
@Path("model.product")
public class ProductFacadeREST extends AbstractFacade<Product> {

    @PersistenceContext(unitName = "FDPM-SERVERPU")
    private EntityManager em;

    public ProductFacadeREST() {
        super(Product.class);
    }

    @POST
    @Override
    @Consumes({MediaType.APPLICATION_JSON})
    public void create(Product entity) {
        super.create(entity);
    }

    @POST
    @Path("ret")
    @Consumes({MediaType.APPLICATION_JSON})
    @Produces({MediaType.APPLICATION_JSON})
    public Product createReturn(Product entity) {
        super.create(entity);
        return entity;
    }

    @PUT
    @Path("{id}")
    @Consumes({MediaType.APPLICATION_JSON})
    public void edit(Product entity) {
        super.edit(entity);
    }

    @PUT
    @Path("{id}/ret")
    @Consumes({MediaType.APPLICATION_JSON})
    @Produces({MediaType.APPLICATION_JSON})
    public Product editReturn(Product entity) {
        super.edit(entity);
        return entity;
    }

    @PUT
    @Path("{id}/name/{name}")
    public void editName(@PathParam("id") Long id, @PathParam("name") String name) {
        Product p = find(id);
        p.setName(name);
        em.persist(p);
    }
    
    @PUT
    @Path("{id}/description/{desc}")
    public void editDescription(@PathParam("id") Long id, @PathParam("desc") String desc) {
        Product p = find(id);
        p.setDescription(desc);
        em.persist(p);
    }
    
    //ADDS
    @PUT
    @Path("{pId}/color/{cId}")
    @Produces({MediaType.APPLICATION_JSON})
    public void addColor(@PathParam("pId") Long productId, @PathParam("cId") Long colorId) {
        Product product = this.find(productId);
        Color color = getEntityManager().find(Color.class, colorId);
        product.addColor(color);
        color.addProduct(product);
        em.persist(product);
    }

    @PUT
    @Path("{pId}/material/{mId}")
    @Produces({MediaType.APPLICATION_JSON})
    public void addMaterial(@PathParam("pId") Long productId, @PathParam("mId") Long materialId) {
        Product product = this.find(productId);
        Material material = getEntityManager().find(Material.class, materialId);
        product.addMaterial(material);
        material.addProducts(product);
        em.persist(product);
    }

    @PUT
    @Path("{pId}/pricegroup/{pgId}")
    @Produces({MediaType.APPLICATION_JSON})
    public void addPriceGroup(@PathParam("pId") Long productId, @PathParam("pgId") Long priceGroupId) {
        Product product = this.find(productId);
        PriceGroup pricegroup = getEntityManager().find(PriceGroup.class, priceGroupId);
        product.setPriceGroup(pricegroup);
        pricegroup.addProduct(product);
        em.persist(product);
    }

    @PUT
    @Path("{pId}/productgroup/{pgId}")
    @Produces({MediaType.APPLICATION_JSON})
    public void addProductGroup(@PathParam("pId") Long productId, @PathParam("pgId") Long productGroupId) {
        Product product = this.find(productId);
        ProductGroup pg = getEntityManager().find(ProductGroup.class, productGroupId);
        pg.addProduct(product);
        em.persist(product);
    }

    @PUT
    @Path("{pId}/outfit/{oId}")
    @Produces({MediaType.APPLICATION_JSON})
    public void addOutfit(@PathParam("pId") Long productId, @PathParam("oId") Long outfitId) {
        Product product = this.find(productId);
        Outfit o = getEntityManager().find(Outfit.class, outfitId);
        o.addProduct(product);
        em.persist(product);
    }

    @PUT
    @Path("{pId}/customer/{cId}")
    @Produces({MediaType.APPLICATION_JSON})
    public void addCustomer(@PathParam("pId") Long productId, @PathParam("cId") Long customerId) {
        Product product = this.find(productId);
        Customer c = getEntityManager().find(Customer.class, customerId);
        c.addProduct(product);
        em.persist(product);
    }

    @PUT
    @Path("{pId}/project/{projectId}")
    @Produces({MediaType.APPLICATION_JSON})
    public void addProject(@PathParam("pId") Long productId, @PathParam("projectId") Long projectId) {
        Product product = this.find(productId);
        Project p = getEntityManager().find(Project.class, projectId);
        product.setProject(p);
        p.addProduct(product);
        em.persist(product);
    }

    //DELETES
    @PUT
    @Path("{pId}/dcustomer/{cId}")
    @Produces({MediaType.APPLICATION_JSON})
    public void deleteCustomer(@PathParam("pId") Long productId, @PathParam("cId") Long customerId) {
        Product product = this.find(productId);
        Customer c = getEntityManager().find(Customer.class, customerId);
        c.deleteProduct(product);
        em.persist(product);
    }

    @PUT
    @Path("{pId}/dcolor/{cId}")
    @Produces({MediaType.APPLICATION_JSON})
    public void deleteColor(@PathParam("pId") Long productId, @PathParam("cId") Long colorId) {
        Product product = this.find(productId);
        Color color = getEntityManager().find(Color.class, colorId);
        color.deleteProduct(product);
        em.persist(product);
    }

    @PUT
    @Path("{pId}/dmaterial/{mId}")
    @Produces({MediaType.APPLICATION_JSON})
    public void deleteMaterial(@PathParam("pId") Long productId, @PathParam("mId") Long materialId) {
        Product product = this.find(productId);
        Material material = getEntityManager().find(Material.class, materialId);
        material.deleteProduct(product);
        em.persist(product);
        em.persist(material);
    }

    @PUT
    @Path("{pId}/doutfit/{oId}")
    @Produces({MediaType.APPLICATION_JSON})
    public void deleteOutfit(@PathParam("pId") Long productId, @PathParam("oId") Long outfitId) {
        Product product = this.find(productId);
        Outfit o = getEntityManager().find(Outfit.class, outfitId);
        o.deleteProduct(product);
        em.persist(product);
    }

    @PUT
    @Path("{pId}/dpricegroup/{pgId}")
    @Produces({MediaType.APPLICATION_JSON})
    public void deletePriceGroup(@PathParam("pId") Long productId, @PathParam("pgId") Long priceGroupId) {
        Product product = this.find(productId);
        PriceGroup pricegroup = getEntityManager().find(PriceGroup.class, priceGroupId);
        pricegroup.deleteProduct(product);
        em.persist(product);
    }

    @PUT
    @Path("{pId}/dproductgroup/{pgId}")
    @Produces({MediaType.APPLICATION_JSON})
    public void deleteProductGroup(@PathParam("pId") Long productId, @PathParam("pgId") Long productGroupId) {
        Product product = this.find(productId);
        ProductGroup pg = getEntityManager().find(ProductGroup.class, productGroupId);
        pg.deleteProduct(product);
        em.persist(product);
    }

    @PUT
    @Path("{pId}/dproject/{projectId}")
    @Produces({MediaType.APPLICATION_JSON})
    public void deleteProject(@PathParam("pId") Long productId, @PathParam("projectId") Long projectId) {
        Product product = this.find(productId);
        Project p = getEntityManager().find(Project.class, projectId);
        p.deleteProduct(product);
    }

    @DELETE
    @Path("{id}")
    public void remove(@PathParam("id") Long productId) {
        Product product = this.find(productId);
        Project p = product.getProject();
        Customer c = product.getCustomer();
        PriceGroup pg = product.getPriceGroup();
        ProductGroup pro = product.getProductGroup();
        Outfit o = product.getOutfit();
        List<Color> colors = product.getColors();
        List<Material> materials = product.getMaterials();

        if (product.getProject() != null) {
            p.deleteProduct(product);
        }
        if (product.getCustomer() != null) {
            c.deleteProduct(product);
        }
        if (product.getPriceGroup() != null) {
            pg.deleteProduct(product);
        }
        if (product.getProductGroup() != null) {
            pro.deleteProduct(product);
        }
        if (product.getOutfit() != null) {
            o.deleteProduct(product);
        }
        for (Color col : colors) {
            col.deleteProduct(product);
        }
        for (Material mat : materials) {
            mat.deleteProduct(product);
        }
        super.remove(super.find(productId));
    }

    //SHOWS
    @GET
    @Path("{pId}/customer")
    @Produces({MediaType.APPLICATION_JSON})
    public Customer showCustomer(@PathParam("pId") Long pId) {
        Product p = this.find(pId);
        return p.getCustomer();
    }

    @GET
    @Path("{pId}/colors")
    @Produces({MediaType.APPLICATION_JSON})
    public List showColors(@PathParam("pId") Long pId) {
        Product p = this.find(pId);
        return p.getColors();
    }

    @GET
    @Path("{pId}/materials")
    @Produces({MediaType.APPLICATION_JSON})
    public List showMaterials(@PathParam("pId") Long pId) {
        Product p = this.find(pId);
        return p.getMaterials();
    }

    @GET
    @Path("{pId}/outfit")
    @Produces({MediaType.APPLICATION_JSON})
    public Outfit showOutfit(@PathParam("pId") Long pId) {
        Product p = this.find(pId);
        return p.getOutfit();
    }

    @GET
    @Path("{pId}/pricegroup")
    @Produces({MediaType.APPLICATION_JSON})
    public PriceGroup showPriceGroup(@PathParam("pId") Long pId) {
        Product p = this.find(pId);
        return p.getPriceGroup();
    }

    @GET
    @Path("{pId}/productgroup")
    @Produces({MediaType.APPLICATION_JSON})
    public ProductGroup showProductGroup(@PathParam("pId") Long pId) {
        Product p = this.find(pId);
        return p.getProductGroup();
    }

    @GET
    @Path("{pId}/project")
    @Produces({MediaType.APPLICATION_JSON})
    public Project showProjects(@PathParam("pId") Long pId) {
        Product p = this.find(pId);
        return p.getProject();
    }

    @GET
    @Path("{id}")
    @Produces({MediaType.APPLICATION_JSON})
    public Product find(@PathParam("id") Long id) {
        return super.find(id);
    }

    @GET
    @Override
    @Produces({MediaType.APPLICATION_JSON})
    public List<Product> findAll() {
        return super.findAll();
    }

    @GET
    @Path("{from}/{to}")
    @Produces({MediaType.APPLICATION_JSON})
    public List<Product> findRange(@PathParam("from") Integer from, @PathParam("to") Integer to) {
        return super.findRange(new int[]{from, to});
    }

    @GET
    @Path("count")
    @Produces(MediaType.TEXT_PLAIN)
    public String countREST() {
        return String.valueOf(super.count());
    }

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }
}
