package com.devsuperior.dscatalog.dto;

import com.devsuperior.dscatalog.entities.User;

public class UserInsertDTO extends UserDTO{

	private static final long serialVersionUID = 1L;
	
	private String password;
	
	public UserInsertDTO() {
		super();
	}
	
	public UserInsertDTO(User user) {
		super(user);
		this.password = user.getPassword();
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}
