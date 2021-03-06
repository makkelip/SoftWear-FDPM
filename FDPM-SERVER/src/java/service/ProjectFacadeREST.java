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
@Path("model.project")
public class ProjectFacadeREST extends AbstractFacade<Project> {

    @PersistenceContext(unitName = "FDPM-SERVERPU")
    private EntityManager em;

    public ProjectFacadeREST() {
        super(Project.class);
    }

    @POST
    @Override
    @Consumes({MediaType.APPLICATION_JSON})
    public void create(Project entity) {
        super.create(entity);
    }

    @POST
    @Path("ret")
    @Consumes({MediaType.APPLICATION_JSON})
    @Produces({MediaType.APPLICATION_JSON})
    public Project createReturn(Project entity) {
        super.create(entity);
        return entity;
    }

    @PUT
    @Path("{id}")
    @Consumes({MediaType.APPLICATION_JSON})
    public void edit(@PathParam("id") Long id, Project entity) {
        super.edit(entity);
    }

    @PUT
    @Path("ret")
    @Consumes({MediaType.APPLICATION_JSON})
    @Produces({MediaType.APPLICATION_JSON})
    public Project editReturn(Project entity) {
        super.edit(entity);
        return entity;
    }

    //ADDS
    @PUT
    @Path("{pId}/color/{cId}")
    @Produces(MediaType.APPLICATION_JSON)
    public void addColor(@PathParam("pId") Long projectId, @PathParam("cId") Long colorId) {
        Project project = this.find(projectId);
        Color color = getEntityManager().find(Color.class, colorId);
        em.persist(project);
        project.addColor(color);
    }

    @PUT
    @Path("{pId}/product/{cId}")
    @Produces(MediaType.APPLICATION_JSON)
    public void addProduct(@PathParam("pId") Long projectId, @PathParam("cId") Long productId) {
        Project project = this.find(projectId);
        Product product = getEntityManager().find(Product.class, productId);
        project.addProduct(product);
        em.persist(project);
    }

    //DELETES
    @PUT
    @Path("{pId}/dcolor/{cId}")
    @Produces(MediaType.APPLICATION_JSON)
    public void deleteColor(@PathParam("pId") Long projectId, @PathParam("cId") Long colorId) {
        Project project = this.find(projectId);
        Color color = getEntityManager().find(Color.class, colorId);
        em.persist(project);
        project.deleteColor(color);
    }

    @PUT
    @Path("{pId}/dproduct/{cId}")
    @Produces(MediaType.APPLICATION_JSON)
    public void deleteProduct(@PathParam("pId") Long projectId, @PathParam("cId") Long productId) {
        Project project = this.find(projectId);
        Product product = getEntityManager().find(Product.class, productId);
        project.deleteProduct(product);
        em.persist(project);
    }

    @DELETE
    @Path("{id}")
    public void remove(@PathParam("id") Long id) {
        super.remove(super.find(id));
    }

    //SHOWS
    @GET
    @Path("{pId}/products")
    @Produces({MediaType.APPLICATION_JSON})
    public List showProducts(@PathParam("pId") Long pId) {
        Project p = this.find(pId);
        return p.getProducts();
    }

    @GET
    @Path("{pId}/projects")
    @Produces({MediaType.APPLICATION_JSON})
    public List showColors(@PathParam("pId") Long pId) {
        Project p = this.find(pId);
        return p.getColors();
    }

    @GET
    @Path("{id}")
    @Produces({MediaType.APPLICATION_JSON})
    public Project find(@PathParam("id") Long id) {
        return super.find(id);
    }

    @GET
    @Override
    @Produces({MediaType.APPLICATION_JSON})
    public List<Project> findAll() {
        return super.findAll();
    }

    @GET
    @Path("{from}/{to}")
    @Produces({MediaType.APPLICATION_JSON})
    public List<Project> findRange(@PathParam("from") Integer from, @PathParam("to") Integer to) {
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
