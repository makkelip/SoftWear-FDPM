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
import model.Color;
import model.Product;
import model.Project;

/**
 *
 * @author Markus
 */
@Stateless
@Path("model.color")
public class ColorFacadeREST extends AbstractFacade<Color> {

    @PersistenceContext(unitName = "FDPM-SERVERPU")
    private EntityManager em;

    public ColorFacadeREST() {
        super(Color.class);
    }

    @POST
    @Override
    @Consumes({MediaType.APPLICATION_JSON})
    public void create(Color entity) {
        super.create(entity);
    }

    //this post returns managed entity
    @POST
    @Path("return")
    @Consumes({MediaType.APPLICATION_JSON})
    @Produces(MediaType.APPLICATION_JSON)
    public Color createRet(Color entity) {
        super.create(entity);
        return entity;
    }

    @PUT
    @Path("{id}")
    @Consumes({MediaType.APPLICATION_JSON})
    public void edit(@PathParam("id") Long id, Color entity) {
        super.edit(entity);
    }

    @PUT
    @Path("{cId}/project/{pId}")
    @Produces(MediaType.APPLICATION_JSON)
    public void addProject(@PathParam("pId") Long projectId, @PathParam("cId") Long colorId) {
        Color color = this.find(colorId);
        Project project = getEntityManager().find(Project.class, projectId);
        color.addProject(project);
        em.persist(color);
    }

    @PUT
    @Path("{cId}/product/{pId}")
    @Produces(MediaType.APPLICATION_JSON)
    public void addProduct(@PathParam("pId") Long productId, @PathParam("cId") Long colorId) {
        Color color = this.find(colorId);
        Product product = getEntityManager().find(Product.class, productId);
        color.addProduct(product);
        em.persist(color);

    }

    @DELETE
    @Path("{id}")
    public void remove(@PathParam("id") Long id) {
        super.remove(super.find(id));
    }

    @GET
    @Path("{id}")
    @Produces({MediaType.APPLICATION_JSON})
    public Color find(@PathParam("id") Long id) {
        return super.find(id);
    }

    @GET
    @Path("{cId}/projects")
    @Produces({MediaType.APPLICATION_JSON})
    public List showProjects(@PathParam("cId") Long colorId) {
        Color color = this.find(colorId);
        return color.getProjects();
    }

    @GET
    @Path("{cId}/products")
    @Produces({MediaType.APPLICATION_JSON})
    public List showProducts(@PathParam("cId") Long colorId) {
        Color color = this.find(colorId);
        return color.getProducts();
    }

    @GET
    @Override
    @Produces({MediaType.APPLICATION_JSON})
    public List<Color> findAll() {
        return super.findAll();
    }

    @GET
    @Path("{from}/{to}")
    @Produces({MediaType.APPLICATION_JSON})
    public List<Color> findRange(@PathParam("from") Integer from, @PathParam("to") Integer to) {
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
