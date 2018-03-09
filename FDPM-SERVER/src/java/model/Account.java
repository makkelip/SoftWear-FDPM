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
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

/**
 *
 * @author Markus
 */
@Entity
//@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "userName", scope = Account.class)
public class Account implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    private String userName;
    private String email;
    @ManyToMany
    @JsonBackReference(value = "account-customer-ref")
    private List<Customer> customers;

    //ADDS
    public void addCustomer(Customer customer) {
        if (!customers.contains(customer)) {
            customers.add(customer);
            customer.addAccount(this);
        }
    }

    //DELETES
    public void deleteCustomer(Customer customer) {
        customers.remove(customer);
    }

    public List<Long> getCustomerIDs() {
        List<Long> ls = new ArrayList<>();
        for (Customer p : customers) {
            ls.add(p.getId());
        }
        return ls;
    }

    //GETTERS
    public String getEmail() {
        return email;
    }

    public String getUserName() {
        return userName;
    }

    //SETTERS
    public void setCustomers(List<Customer> customers) {
        this.customers = customers;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (userName != null ? userName.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Account)) {
            return false;
        }
        Account other = (Account) object;
        if ((this.userName == null && other.userName != null) || (this.userName != null && !this.userName.equals(other.userName))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "model.User[ username=" + userName + " ]";
    }
}
