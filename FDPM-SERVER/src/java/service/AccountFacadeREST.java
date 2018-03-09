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
import model.Account;
import model.Customer;

/**
 *
 * @author Markus
 */
@Stateless
@Path("model.account")
public class AccountFacadeREST extends AbstractFacade<Account> {
    
    @PersistenceContext(unitName = "FDPM-SERVERPU")
    private EntityManager em;
    
    public AccountFacadeREST() {
        super(Account.class);
    }
    
    @POST
    @Override
    @Consumes({MediaType.APPLICATION_JSON})
    public void create(Account entity) {
        super.create(entity);
    }
    
    @PUT
    @Path("{id}")
    @Consumes({MediaType.APPLICATION_JSON})
    public void edit(@PathParam("id") String id, Account entity) {
        super.edit(entity);
    }
    
    //ADDS
    @PUT
    @Path("{aId}/customer/{cId}")
    @Produces({MediaType.APPLICATION_JSON})
    public void addCustomer(@PathParam("aId") String accountName, @PathParam("cId") Long customerId) {
        Account account = this.find(accountName);
        Customer customer = getEntityManager().find(Customer.class, customerId);
        account.addCustomer(customer);
        em.persist(account);
    }
    
    //DELETES
    @PUT
    @Path("{aId}/dcustomer/{cId}")
    @Produces({MediaType.APPLICATION_JSON})
    public void deleteCustomer(@PathParam("aId") String accountName, @PathParam("cId") Long customerId) {
        Account account = this.find(accountName);
        Customer customer = getEntityManager().find(Customer.class, customerId);
        account.deleteCustomer(customer);
        customer.deleteAccount(account);
    }
    
    @DELETE
    @Path("{id}")
    public void remove(@PathParam("id") String id) {
        super.remove(super.find(id));
    }
    
    @GET
    @Path("{id}")
    @Produces({MediaType.APPLICATION_JSON})
    public Account find(@PathParam("id") String id) {
        return super.find(id);
    }
    
    @GET
    @Override
    @Produces({MediaType.APPLICATION_JSON})
    public List<Account> findAll() {
        return super.findAll();
    }
    
    @GET
    @Path("{from}/{to}")
    @Produces({MediaType.APPLICATION_JSON})
    public List<Account> findRange(@PathParam("from") Integer from, @PathParam("to") Integer to) {
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
