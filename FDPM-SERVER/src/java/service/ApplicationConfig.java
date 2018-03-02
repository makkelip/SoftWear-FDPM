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

import java.util.Set;
import javax.ws.rs.core.Application;

/**
 *
 * @author Markus
 */
@javax.ws.rs.ApplicationPath("sources")
public class ApplicationConfig extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    /**
     * Do not modify addRestResourceClasses() method.
     * It is automatically populated with
     * all resources defined in the project.
     * If required, comment out calling this method in getClasses().
     */
    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(filter.CorsFilter.class);
        resources.add(service.AccountFacadeREST.class);
        resources.add(service.ColorFacadeREST.class);
        resources.add(service.CustomerFacadeREST.class);
        resources.add(service.MaterialFacadeREST.class);
        resources.add(service.OutfitFacadeREST.class);
        resources.add(service.PriceGroupFacadeREST.class);
        resources.add(service.ProductFacadeREST.class);
        resources.add(service.ProductGroupFacadeREST.class);
        resources.add(service.ProjectFacadeREST.class);
    }
    
}
