package com.cloudcrawler.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "AWS_OBJECT_ATTRIBUTES")
public class AwsAttributes {

	@Id
	@Column(name = "object_name", nullable = false)
	private String objectName; 
	@Column(name = "attributes", nullable = false)
	private String objectAttributes;
	
	public String getObjectName() {
		return objectName;
	}
	public void setObjectName(String objectName) {
		this.objectName = objectName;
	}
	public String getObjectAttributes() {
		return objectAttributes;
	}
	public void setObjectAttributes(String objectAttributes) {
		this.objectAttributes = objectAttributes;
	}
	@Override
	public String toString() {
		return "AwsAttributes [objectName=" + objectName + ", objectAttributes=" + objectAttributes + "]";
	}
	
	
}
