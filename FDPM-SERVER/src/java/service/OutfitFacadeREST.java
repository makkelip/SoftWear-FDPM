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
import model.Outfit;
import model.Product;

/**
 *
 * @author Markus
 */
@Stateless
@Path("model.outfit")
public class OutfitFacadeREST extends AbstractFacade<Outfit> {

    @PersistenceContext(unitName = "FDPM-SERVERPU")
    private EntityManager em;

    public OutfitFacadeREST() {
        super(Outfit.class);
    }

    @POST
    @Override
    @Consumes({MediaType.APPLICATION_JSON})
    public void create(Outfit entity) {
        super.create(entity);
    }

    @PUT
    @Path("{id}")
    @Consumes({MediaType.APPLICATION_JSON})
    public void edit(@PathParam("id") Long id, Outfit entity) {
        super.edit(entity);
    }

    //ADDS
    @PUT
    @Path("{oId}/product/{pId}")
    @Produces({MediaType.APPLICATION_JSON})
    public void addProduct(@PathParam("oId") Long outfitId, @PathParam("pId") Long productId) {
        Outfit o = this.find(outfitId);
        Product product = getEntityManager().find(Product.class, productId);
        o.addProduct(product);
        em.persist(o);
    }

    //DELETES
    @PUT
    @Path("{oId}/dproduct/{pId}")
    @Produces({MediaType.APPLICATION_JSON})
    public void deleteProduct(@PathParam("oId") Long outfitId, @PathParam("pId") Long productId) {
        Outfit o = this.find(outfitId);
        Product product = getEntityManager().find(Product.class, productId);
        o.deleteProduct(product);
        em.persist(o);
    }

    @DELETE
    @Path("{id}")
    public void remove(@PathParam("id") Long id) {
        super.remove(super.find(id));
    }

    //SHOWS
    @GET
    @Path("{oId}/products")
    @Produces({MediaType.APPLICATION_JSON})
    public List showProducts(@PathParam("oId") Long outfitId) {
        Outfit outfit = this.find(outfitId);
        return outfit.getProducts();
    }

    @GET
    @Path("{id}")
    @Produces({MediaType.APPLICATION_JSON})
    public Outfit find(@PathParam("id") Long id) {
        return super.find(id);
    }

    @GET
    @Override
    @Produces({MediaType.APPLICATION_JSON})
    public List<Outfit> findAll() {
        return super.findAll();
    }

    @GET
    @Path("{from}/{to}")
    @Produces({MediaType.APPLICATION_JSON})
    public List<Outfit> findRange(@PathParam("from") Integer from, @PathParam("to") Integer to) {
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
